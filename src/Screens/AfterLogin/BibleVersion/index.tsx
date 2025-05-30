import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Linking,
  SafeAreaView,
  Modal,
} from 'react-native';
import WebView from 'react-native-webview';
import {styles} from './styles';

const BibleVersions = () => {
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);

  const bibleVersions = [
    {
      id: 1,
      name: '📖 King James Version (KJV)',
      pdfUrl:
        'https://www.holybooks.com/wp-content/uploads/2010/05/The-Holy-Bible-King-James-Version.pdf',
    },
    {
      id: 2,
      name: '📖 New International Version (NIV)',
      pdfUrl:
        'https://www.wordfm.org/wp-content/uploads/2019/07/whole_bible_niv1984.pdf',
    },
    {
      id: 3,
      name: '📖 English Standard Version (ESV)',
      pdfUrl: 'https://nabataea.net/media/04shop/PDFS/ESV%20Bible.pdf',
    },
    {
      id: 4,
      name: '📖 New Living Translation (NLT)',
      pdfUrl: 'https://download.sabda.org/mobile/pdf/NLT.pdf',
    },
    {
      id: 5,
      name: '📖 New King James Version (NKJV)',
      pdfUrl: 'https://download.sabda.org/mobile/pdf/NKJV.pdf',
    },
  ];

  const handleDownload = async (url: string) => {
    try {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      } else {
        console.log("Don't know how to open URL: " + url);
      }
    } catch (error) {
      console.error('Error opening URL:', error);
    }
  };

  const handleRead = (url: string) => {
    setSelectedPdf(url);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Bible Versions</Text>
        {bibleVersions.map(version => (
          <View key={version.id} style={styles.versionCard}>
            <Text style={styles.versionName}>{version.name}</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={[styles.button, styles.readButton]}
                onPress={() => handleRead(version.pdfUrl)}>
                <Text style={styles.buttonText}>Read</Text>
              </TouchableOpacity>
              {/* <TouchableOpacity
                style={[styles.button, styles.downloadButton]}
                onPress={() => handleDownload(version.pdfUrl)}>
                <Text style={styles.buttonText}>Download</Text>
              </TouchableOpacity> */}
            </View>
          </View>
        ))}
      </ScrollView>

      <Modal
        visible={selectedPdf !== null}
        animationType="slide"
        onRequestClose={() => setSelectedPdf(null)}>
        <SafeAreaView style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setSelectedPdf(null)}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
          {selectedPdf && (
            <WebView
              source={{uri: selectedPdf}}
              style={styles.webview}
              javaScriptEnabled={true}
              domStorageEnabled={true}
            />
          )}
        </SafeAreaView>
      </Modal>
    </SafeAreaView>
  );
};

export default BibleVersions;
