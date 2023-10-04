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
          Afrigives is a mobile platform that allows for donation of clothes of
          cash equivalents from anywhere in the world to Africa. Afrigives was
          designed during the COVID-19 worldwide lockdown.
        </Disclosure>
        <Disclosure title="How do cloth donations work">
          Afrigives allows users to donate clothes in 3 easy steps. An image
          upload of the item(s) followed by details for pickup and options to
          personalize donation. There is also the option to donate the cash
          equivalent.
        </Disclosure>
        <Disclosure title="Who are Afri-Agents?">
          Afri-Agents are NGOs that partner with Afrigives worldwide and in
          Africa to pick up and run logistics that ensure donations are
          fulfilled.
        </Disclosure>
        <Disclosure title="What are Donation Groups">
          Donation Groups on Afrigives allows for users to donate in groups with
          family and friends. User can create or join a donation group and
          donate clothes or cash equivalent towards a set goal. Donation links
          can also be shared to invite others to join in and donate on
          Afrigives.
        </Disclosure>
        <Disclosure title="What can I donate?">
          Afrigives is primarily accepts donations in clothes to help meet the
          SDG goals 1 & 3 in Africa.
        </Disclosure>
      </ScrollView>
    </View>
  );
};

const Disclosure = ({
  title,
  children,
}: {
  title: string;
  children: string;
}) => {
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
    fontFamily: 'ps-bold',
    fontSize: normalize(16),
  },
  revealContainer: {
    marginTop: normalize(16),
  },
  revealText: {
    fontFamily: 'ps-bold',
  },
});
