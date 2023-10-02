import ScreenHeader from '@components/ScreenHeader';
import { Text, View } from '@components/Themed';
import { AntDesign } from '@expo/vector-icons';
import normalize from '@utils/normalize';
import React, { useState } from 'react';
import { Pressable, ScrollView, StyleSheet } from 'react-native';

const FAQ = (): JSX.Element => {
  return (
    <View style={{ flex: 1 }}>
      <ScreenHeader title="FAQ" />
      <ScrollView style={styles.container}>
        <Disclosure title="What is Afrigives">
          Afrigives allows you to blah blah
        </Disclosure>
        <Disclosure title="How do cloth donations work">
          Afrigives allows you to blah blah
        </Disclosure>
        <Disclosure title="Who are Afri-Agents?">
          Afrigives allows you to blah blah
        </Disclosure>
        <Disclosure title="What are Donation Groups">
          Afrigives allows you to blah blah
        </Disclosure>
        <Disclosure title="Invite link expired?">
          Afrigives allows you to blah blah
        </Disclosure>
        <Disclosure title="What can I donate?">
          Afrigives allows you to blah blah
        </Disclosure>
      </ScrollView>
    </View>
  );
};

const Disclosure: React.FC<{ title: string }> = ({
  title,
  children,
}): JSX.Element => {
  const [open, setOpen] = useState(false);

  return (
    <Pressable
      onPress={() => setOpen((e) => !e)}
      style={styles.disclosureContainer}
    >
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={styles.h1}>{title}</Text>
        <View>
          <AntDesign
            name={open ? 'up' : 'down'}
            size={normalize(20)}
            color="black"
          />
        </View>
      </View>
      {open && (
        <View style={styles.revealContainer}>
          <Text style={styles.revealText}>{children}</Text>
        </View>
      )}
    </Pressable>
  );
};

export default FAQ;

const styles = StyleSheet.create({
  container: {
    padding: '3%',
  },
  disclosureContainer: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#CCCCCC',
    padding: normalize(20),
    marginVertical: '3%',
  },
  h1: {
    fontFamily: 'sg-bold',
    fontSize: normalize(16),
  },
  revealContainer: {
    marginTop: normalize(16),
  },
  revealText: {
    fontFamily: 'sg-bold',
  },
});
