import React, {Component} from 'react';
import {View, ScrollView, Text, StyleSheet, TextInput, Button} from 'react-native';

export default class ScrolledView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: "", // Стан для збереження тексту з поля вводу
      displayText: "", // Стан для відображення тексту
    };
  }

  // Функція для обробки натискання на кнопку
  handleButtonPress = () => {
    const { inputText, displayText } = this.state;
    const newText = `${displayText} ${inputText}`; // Додаємо новий текст до вже відображеного тексту
    this.setState({ displayText: newText, inputText: "" }); // Оновлюємо стани
  };

  render() {
    return(
      <ScrollView style={[styles.background,]}>
      <View style={[styles.container,]}>
        <Text style={[styles.header,]}>This is a story about cute cat</Text>
        <Text style={[styles.text,]}>
            Every year on August 8, the world comes together to celebrate humans’ adorable, furry feline companion, the cat.
            To mark the occasion, Battersea Dogs & Cats Home, the charity that welcomes and cares for thousands of felines each year, has decided to share some of its most unique cat residents of 2023.
            Recommended by Talking about their kitty residents, the Cattery Team Leader, Bradley Tovell said: “Every cat is an individual with their own personality, and the cats at Battersea are no different. From felines with thumbs to kindles of kittens, we see cats of all shapes, sizes, and ages who are looking for their perfect homes.
            “Here at Battersea, we hope that pet owners will join us in celebrating this International Cat Day by championing their own cats’ quirks.”
            Here are some of the animal rescue centre’s most distinctive cat residents that joined the roster in 2023.
        </Text>
        </View>
        <View style={[styles.container,]}>
        <Text style={[styles.header,]}>Cat Of The Year: Moggy who helps his deaf owner by tapping when phone rings and fetching post gets top prize</Text>
        <Text style={[styles.text,]}>
            A cat who has become invaluable to his deaf owner by "hearing" for her has been voted National Cat of the Year.
            Zebby the moggy has no formal hearing training, yet helps 66-year-old Genevieve Moss around the home by tapping her when the phone rings or he hears any strange noises, and by pacing in front of her if someone is at the door.
            The black and white cat even brings the post and slippers to Ms Moss, who lives on her own in Derbyshire.
            She said with Zebby around she doesn't feel lonely and "can't imagine life without [him]".
            She added: "Without my hearing aid, I can't hear anything, but now I have Zebby to help me. He'll come and tap me when the phone is ringing, and then I can pop my hearing aid and speaker on and take the call."
            Dubbed a "hero" by his owner, Zebby beat thousands of other felines to receive the prestigious award after deliberation by a panel of celebrities including former goalkeeper David Seaman MBE and high-profile vet Dr Scott Miller.
        </Text>
        </View>
        <View style={[styles.container,]}>
        <Text style={[styles.header,]}>Domestic cats labelled 'alien invasive species', by Polish institute</Text>
        <Text style={[styles.text,]}>
            Domestic cats have been labelled as an "invasive alien species" by a Polish scientific institute.
            It refers to the growing scientific consensus that domestic cats cause damage to birds and other wildlife by the number they hunt and kill.
            However, Wojciech Solarz, a biologist at the Polish Academy of Sciences was not prepared for the backlash from some cat lovers after entering Felis catus - the scientific name for the common household cat - into a national database run by the academy's Institute of Nature Conservation.
            The database already had 1,786 other species listed with no objections, Mr Solarz added.
            Invasive alien species number 1,787, however, is a creature so beloved that it is often honoured in Poland's cemeteries reserved for cats and dogs.
            Mr Solarz said the criteria for including the cat among alien invasion species "are 100% met by the cat".
            In a television broadcast on TVN, the biologist clashed with the author of a book titled The Happy Cat who said cats were unfairly assigned too much blame.
        </Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.header}>ADD YOUR TEXT</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your text"
            onChangeText={(text) => this.setState({ inputText: text })}
            value={this.state.inputText}
            maxLength={50}
          />
          <Text style={styles.text}>{this.state.displayText}</Text>
          <Button title="Add" onPress={this.handleButtonPress} />
        </View>
      </ScrollView>

    );
  }
}

const styles = StyleSheet.create({
  background:{
    backgroundColor: "#DEDEDE",
  },
  container:{
    borderWidth: 3,
    borderColor: "#CDCDCD",
    borderRadius: 20,
    margin: 10,
    marginVertical: 20,
    padding: 15,
    backgroundColor: "white",
  },
  header: {
    fontSize: 30,
    flex: 1,
    justifyContent: "center",
    textAlign: "center",
    marginVertical: 10,
  },
  text: {
    fontSize: 20,
    marginVertical: 5,
  },
  input:{
    borderWidth: 2,
    borderColor: "#CDCDCD",
    borderRadius: 10,
    marginHorizontal: 10,
    paddingHorizontal: 5,
    paddingVertical: 3,
  }

});