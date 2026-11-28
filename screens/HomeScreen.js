import { View, StyleSheet } from 'react-native';
import { Card, Text, Button } from 'react-native-paper';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text variant="headlineMedium">
        Elevate Horizon Connect
      </Text>

      <Text
        variant="titleMedium"
        style={styles.sectionTitle}
      >
        Today's Events
      </Text>

      <Card style={styles.card}>
        <Card.Content>
          <Text variant="titleMedium">
            Yoga Class
          </Text>

          <Text>
            10:00 AM
          </Text>

          <Text>
            Community Hall
          </Text>
        </Card.Content>

        <Card.Actions>
          <Button mode="contained">Details</Button>
        </Card.Actions>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Text variant="titleMedium">
            Walking Club
          </Text>

          <Text>
            2:00 PM
          </Text>

          <Text>
            City Park
          </Text>
        </Card.Content>

        <Card.Actions>
          <Button mode="contained">Details</Button>
        </Card.Actions>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  sectionTitle: {
    marginTop: 20,
    marginBottom: 10,
  },

  card: {
    marginBottom: 15,
  },
});
