import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList, TouchableOpacity, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import React, { useState } from 'react';
import Header from './components/header';
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo';
import Sandbox from './components/sandbox';


export default function App() {
  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: '1' },
    { text: 'create an app', key: '2' },
    { text: 'play on the switch', key: '3' }
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key)
    })
  }

  submitHandler = (text) => {

    if (text.length < 3) {
      Alert.alert('OOPS!', 'Todo must be over 3 characters long');
      return;
    }

    setTodos((prevTodos) => {
      return [
        { text: text, key: Math.random().toString() },
        ...prevTodos
      ]
    })
  }

  return (
    //<Sandbox />


    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
      console.log('dismissed keyboard');
    }}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>

        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
    flex: 1,
  },
  list: {
    flex: 1,
    marginTop: 20,
  },

});


//Lesson 1
{/* <View style={styles.header}>
        <Text style={styles.boldText}>Hello, World</Text>
      </View>
      <View style={styles.body}>
        <Text> Lorem ipsum dolor sit amet</Text>
        <Text> Lorem ipsum dolor sit amet</Text>
        <Text> Lorem ipsum dolor sit amet</Text>
      </View> */}

//Lesson 2
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, TextInput, Button, } from 'react-native';
// import React, { useState } from 'react';

// export default function App() {
//   const [name, setName] = useState('Shaun');
//   const [person, setPerson] = useState({ name: 'mario', age: 40 });
//   const clickHandler = () => {
//     if (name === 'Chun-Li') {
//       setName('Shaun');
//     }
//     else {
//       setName('Chun-Li');
//     }
//     setPerson({ name: 'luigi', age: 45 });
//   }

//   return (
//     <View style={styles.container}>
//       <Text>My name is {name}</Text>
//       <Text>His name is {person.name} and his age is {person.age}.</Text>
//       <View style={styles.buttonContainer}>
//         <Button style={styles.buttonContainer}
//           title="update state"
//           onPress={clickHandler}>
//         </Button>
//       </View>
//     </View>
//   );
// }

// Lesson 3
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, TextInput, Button, } from 'react-native';
// import React, { useState } from 'react';

// export default function App() {
//   const [name, setName] = useState('Shaun');
//   const [age, setAge] = useState('30');


//   return (
//     <View style={styles.container}>
//       <Text>Enter name:</Text>
//       <TextInput
//         multiline
//         keyboardType='numeric'
//         style={styles.input}
//         placeholder='e.g. John Doe'
//         onChangeText={(val) => setName(val)}
//       />
//       <Text>name: {name}, age: {age}</Text>
//     </View>
//   );
// }

// Lesson 6 & 7
// export default function App() {
//   const [people, setPeople] = useState([
//     { name: 'shaun', id: '1' },
//     { name: 'yoshi', id: '2' },
//     { name: 'mario', id: '3' },
//     { name: 'luigi', id: '4' },
//     { name: 'peach', id: '5' },
//     { name: 'toad', id: '6' },
//     { name: 'bowser', id: '7' },
//   ]);


//   return (
//     <View style={styles.container}>
//       <FlatList //Better for performance, loads what is needed
//         numColumns={2}
//         keyExtractor={(item) => item.id}
//         data={people}
//         renderItem={({ item }) => (
//           <Text style={styles.item}>{item.name}</Text>
//         )}
//       />


//       {/* <ScrollView>
//         {people.map(item => (
//           <View key={item.key}>
//             <Text style={styles.item}>{item.name}</Text>
//           </View>
//         )
//         )}
//       </ScrollView> */}
//     </View>
//   );
// }

// Lesson 8
// export default function App() {
//   const [people, setPeople] = useState([
//     { name: 'shaun', id: '1' },
//     { name: 'yoshi', id: '2' },
//     { name: 'mario', id: '3' },
//     { name: 'luigi', id: '4' },
//     { name: 'peach', id: '5' },
//     { name: 'toad', id: '6' },
//     { name: 'bowser', id: '7' },
//   ]);

//   const pressHandler = (id) => {
//     console.log(id);
//     setPeople((prevPeople) => {
//       return prevPeople.filter(person => person.id != id)
//     })
//   }

//   return (
//     <View style={styles.container}>
//       <FlatList //Better for performance, loads what is needed
//         numColumns={2}
//         keyExtractor={(item) => item.id}
//         data={people}
//         renderItem={({ item }) => (
//           <TouchableOpacity onPress={() => pressHandler(item.id)}>
//             <Text style={styles.item}>{item.name}</Text>
//           </TouchableOpacity>
//         )}
//       />
//     </View>
//   );
// }