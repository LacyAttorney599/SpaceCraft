import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
  View,
  FlatList,
} from "react-native";
import { Card, Paragraph, Title } from "react-native-paper";
import { useStarships } from "../hook/useStarships";

const CardShip = ({ item }: any) => {
  return (
    <Card style={styles.card}>
      <Card.Cover source={{ uri: item.url }} />
      <Card.Content>
        <Title>{item.name}</Title>
        <Paragraph>
          Model : {item.model} {"\n"}
          Crew : {item.crew} {"\n"}
          Hyperdriving rating : {item.hyperdrive_rating} {"\n"}
          Price : {item.cost_in_credits}
        </Paragraph>
      </Card.Content>
    </Card>
  );
}


export const StarshipFeedScreen = () => {
  const { isLoading, isError, data } = useStarships()

  if (isLoading) {
    return <Text>loadingw</Text>;
  }
  if (isError) {
    return <Text>Error</Text>;
  }
  const renderItem = (props: any) => {
    console.log(props.item)
    return (<CardShip item={props.item} />);
  }


  return (
    <View style={styles.container}>
      <FlatList
        data={data.results}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: '#45549F',
  },
  flatlist: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  card: {
    marginBottom: 20,

  }
});
