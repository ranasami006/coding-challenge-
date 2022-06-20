import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Alert,
  TextInput,
  FlatList,
} from "react-native";
import Button from "./component/Button";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { _axiosGetAPI1 } from "./apis/Apis";

const Stack = createNativeStackNavigator();

const HomeScreen = ({ navigation }) => {
  const FindPivot = () => {
    let arrlength = arr.length;
    let start = 0;
    let end = arrlength - 1;
    let left_sum = 0;
    let right_sum = 0;

    //console.log(arrlength)

    for (let i = 0; i < arrlength; i++) {
      if (start == end && left_sum == right_sum) {
        //console.log(arr[start])
        Alert.alert(JSON.stringify(arr[start]));
        return;
      }
      if (start == end) {
        Alert.alert("No pivot found in array");
        return;
      }
      if (left_sum > right_sum) {
        right_sum = right_sum + arr[end].netWorth;
        end--;
      } else if (right_sum > left_sum) {
        left_sum = left_sum + arr[start].netWorth;
        start++;
      } else {
        right_sum += arr[end].netWorth;
        end--;
      }
    }
  };

  return (
    <>
      <Button
        title="Find Pivot "
        onPress={FindPivot}
        //onPress={
        //() =>
        //navigation.navigate('Profile', { name: 'Jane' })
        // }
      />
      <Button
        title="Go for search "
        onPress={() => navigation.navigate("Profile")}
      />
    </>
  );
};
const ProfileScreen = ({ navigation }) => {
  const findValue = async (val) => {
    let arr = { data };
    setText(val);

    if (val != "") {
      let response = await _axiosGetAPI1(val);

      setTheArray([...data, response]);
    }
  };

  const [text, setText] = React.useState("");
  const [data, setTheArray] = React.useState([]);

  return (
    <View
      style={{
        flex: 1,
        margin: 20,
      }}
    >
      <TextInput
        style={styles.input}
        onChangeText={findValue}
        value={text}
        placeholder="Enter text to search"
      />

      <FlatList
        style={{ padding: 15,marginTop:10 }}
        data={data}
        keyExtractor={(item) => item.count}
        renderItem={({ item }) => (
          <Text style={{ fontSize: 22,marginTop:5 }}>
            {item.count} - {item.name}- {item.age}
          </Text>
        )}
      />
    </View>
  );
};

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Welcome" }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ title: "Search", headerBackTitle: "Home" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const arr = [
  {
    name: "Jack",
    age: 20,
    worthUnit: "billion",
    netWorth: 20,
  },
  {
    name: "Nice",
    age: 29,
    worthUnit: "billion",
    netWorth: 8,
  },
  {
    name: "Tim",
    age: 23,
    worthUnit: "billion",
    netWorth: 3,
  },
  {
    name: "Jonathan",
    age: 27,
    worthUnit: "billion",
    netWorth: 2,
  },
  {
    name: "Billz",
    age: 32,

    worthUnit: "billion",
    netWorth: 7,
  },
  {
    name: "Marry Jim",
    age: 37,
    worthUnit: "billion",
    netWorth: 20,
  },
  {
    name: "Jerry",
    age: 39,
    worthUnit: "billion",
    netWorth: 10,
  },
  {
    name: "Chris",
    age: 35,
    worthUnit: "billion",
    netWorth: 15,
  },
  {
    name: "Ronald",
    age: 21,
    worthUnit: "billion",
    netWorth: 15,
  },
];

export default function App() {
  return <MyStack />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 50,
    //margin: 12,
    //borderWidth: 1,
    padding: 15,
    borderRadius: 25,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,

    elevation: 3,
  },
});
