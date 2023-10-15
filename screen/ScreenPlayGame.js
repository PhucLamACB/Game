import { View, Text,ImageBackground,TouchableOpacity,Image,StyleSheet} from 'react-native'
import React from 'react'

const ScreenPlayGame = () => {
  return (
    
    <View>
      <ImageBackground source={require('../assets/bc2.png')} style={{width:'100%',height:'100%'}}>
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
      <ImageBackground
      source={require('../assets/3.png')}style={styles.backgroundImage}>
      <View style={styles.overlay}>
        <Text style={styles.title}>Cấp độ 1</Text>
        <Text style={styles.content}>
         Có 2 người bạn 1 người mù 1 người câm đi shopping. Câm mua cái nón thì lấy tay chỉ lên đầu còn Mù muốn mua kem đánh răng thì làm sao?
        </Text>
      </View>
      
    </ImageBackground>
      </View>
    </ImageBackground>
    </View>
    
  )
  }

const styles = StyleSheet.create({
  idi:{
    marginTop:-60,
    marginLeft:345,
  },
  backgroundImage: {
    width: "100%",
    height: 270,
    resizeMode:'cover',
    marginTop:50
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal:30
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFF00',
    textAlign: 'center',
    marginBottom: 10,
    //  fontFamily:'UTM-Cookies.ttf'
  },
  content: {
    fontSize: 16,
    color: '#FF9900',
    textAlign: 'center',
    // fontFamily:'UTM-Cookies.ttf'
  },

})



export default ScreenPlayGame