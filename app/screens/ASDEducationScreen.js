import React from 'react';
import { StyleSheet, ScrollView, Text, View , TouchableOpacity, Linking} from 'react-native';

const Link = ({ text, url }) => {
    const handleLinkPress = () => {
        Linking.openURL(url);
    };

    return (
        <TouchableOpacity onPress={handleLinkPress}>
            <Text style={styles.link}>{text}</Text>
        </TouchableOpacity>
    );
};

function ASDEducationScreen(props) {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.heading}>Understanding Autism</Text>

            {/* What is Autism? Section */}
            <Text style={styles.sectionHeading}>What is Autism?</Text>
            <Text style={styles.paragraph}>
                Autism is a way our brains develop. It often shows up before we turn 3, and affects how we talk, play, and understand things.
            </Text>

            {/* Challenges Section */}
            <Text style={styles.sectionHeading}>Challenges</Text>
            <Text style={styles.paragraph}>
                Sometimes, it's hard for us to talk or play with others. We might face health issues like allergies or trouble sleeping.
            </Text>

            {/* Help Section */}
            <Text style={styles.sectionHeading}>Help</Text>
            <Text style={styles.paragraph}>
                Even though there's no cure, getting help early can make things better. Different people with autism can have different experiences. Talk to a trusted
                loved one, or your primary care provider if you think you need assistance.
            </Text>

            {/* Facts & Figures Section */}
            <Text style={styles.heading}>Facts & Figures</Text>
            <Text style={styles.paragraph}>
                1 in 36 kids has Autism. Boys get it more than girls. Sometimes we don't talk, or we start talking later. Everyone with Autism is unique. More kids have autism now than before. We might have other issues like allergies or asthma. Autism is growing fast, but we need more support. A study found that we might face more risks, but we can still progress and get better!
            </Text>

            {/* Help for Our Health Section */}
            <Text style={styles.heading}>Help for Our Health</Text>

            {/* Medical Issues Section */}
            <Text style={styles.sectionHeading}>Medical Issues</Text>
            <Text style={styles.paragraph}>
                Sometimes we have other health problems that make Autism different for each of us. Like allergies, stomach issues, or trouble sleeping.
            </Text>

            {/* Getting Checked Section */}
            <Text style={styles.sectionHeading}>Getting Checked</Text>
            <Text style={styles.paragraph}>
                It's a good idea to see a special doctor who understands both Autism and these other health things. They can make a plan just for us!
            </Text>

            {/* Special Doctors Section */}
            <Text style={styles.sectionHeading}>Special Doctors</Text>
            <Text style={styles.paragraph}>
                Some doctors are experts in helping kids and grown-ups with autism. Check out <Link text="Med Maps" url="http://medmaps.org" />for more info.
            </Text>

            {/* More Info Section */}
            <Text style={styles.sectionHeading}>Additional Resources</Text>
            <Text style={styles.paragraph}>
                Sometimes, we don't know all the answers.. Others do! Additional resources can be found in the 
                <Link text="Autism Speaks Resource Guide" url="https://www.autismspeaks.org/resource-guide" />. Autism Speaks is an advocacy organization founded in 2006 by Bob Wright,
                focusing on Autism awareness, research and support. Autism Speaks is one of the largest Autism-related organizations in the world.
            </Text>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    sectionHeading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 16,
        marginBottom: 8,
    },
    paragraph: {
        fontSize: 16,
        marginBottom: 16,
    },
    link: {
        color: 'blue',
        textDecorationLine: 'underline',
    },
});

export default ASDEducationScreen;
