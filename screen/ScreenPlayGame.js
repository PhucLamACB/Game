import { View, Text,ImageBackground,TouchableOpacity,Image,StyleSheet,useState} from 'react-native'
import React from 'react'

const ScreenPlayGame = () => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswer = (answerIndex) => {
    setSelectedAnswer(answerIndex);
  };

  const getAnswerColor = (answerIndex) => {
    if (selectedAnswer === answerIndex) {
      if (selectedAnswer === 1) {
        return { backgroundColor: 'green', borderColor: 'green' };
      } else {
        return { backgroundColor: 'red', borderColor: 'red' };
      }
    }
    return null;
  };

  return (
    <View>
      <ImageBackground source={require('../assets/bc2.png')} style={{ width: '100%', height: '100%' }}>
      <View>
      <TouchableOpacity>
          <Image source={require('../assets/1.png')} style={{width:60,height:60,}} />
        </TouchableOpacity>
      </View>
      <View style={styles.idi} >
      <TouchableOpacity >
          <Image source={require('../assets/2.png')} style={{width:60,height:60}} />
        </TouchableOpacity>
      </View>
        <View>
          <ImageBackground source={require('../assets/3.png')} style={styles.backgroundImage}>
            <View style={styles.overlay}>
              <Text style={styles.title}>Cấp độ 1</Text>
              <Text style={styles.content}>Có 2 người bạn 1 người mù 1 người câm đi shopping. Câm mua cái nón thì lấy tay chỉ lên đầu còn Mù muốn mua kem đánh răng thì làm sao?</Text>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.container}>
         
          <TouchableOpacity style={[styles.answer, getAnswerColor(0)]} onPress={() => handleAnswer(0)}>
            <ImageBackground source={require('../assets/da1.png')} style={styles.answerBackground}>
              <View style={styles.circle}>
                <Text style={styles.answerText}>A</Text>
              </View>
              <Text style={styles.answerOption}>Nguyễn Phúc Lâm</Text>
            </ImageBackground>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.answer, getAnswerColor(1)]} onPress={() => handleAnswer(1)}>
            <ImageBackground source={require('../assets/da1.png')} style={styles.answerBackground}>
              <View style={styles.circle}>
                <Text style={styles.answerText}>B</Text>
              </View>
              <Text style={styles.answerOption}>Phùng Hữu Long</Text>
            </ImageBackground>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.answer, getAnswerColor(2)]} onPress={() => handleAnswer(2)}>
            <ImageBackground source={require('../assets/da1.png')} style={styles.answerBackground}>
              <View style={styles.circle}>
                <Text style={styles.answerText}>C</Text>
              </View>
              <Text style={styles.answerOption}>Trần Nhật Tân Hiệp</Text>
            </ImageBackground>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.answer, getAnswerColor(3)]} onPress={() => handleAnswer(3)}>
            <ImageBackground source={require('../assets/da1.png')} style={styles.answerBackground}>
              <View style={styles.circle}>
                <Text style={styles.answerText}>D</Text>
              </View>
              <Text style={styles.answerOption}>Khánh</Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  idi:{
    marginTop:-60,
    marginLeft:345,
  },
  backgroundImage: {
    width: '100%',
    height: 270,
    resizeMode: 'cover',
   
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFF00',
    textAlign: 'center',
    marginBottom: 10,
  },
  content: {
    fontSize: 16,
    color: '#FF9900',
    textAlign: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  answer: {
    borderColor: '#000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  answerBackground: {
    flex: 1,
    width:350,
    height:50,
    flexDirection: 'row',
    alignItems: 'center',
   
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    marginLeft:10,
   
  },
  answerText: {
    fontSize: 24,
    color: '#FFFF00',

  },
  answerOption: {
    fontSize: 16,
    color: '#FFF',
  },
});

export default ScreenPlayGame;