import { StyleSheet,Text, View, TextInput, Modal } from "react-native";
import { styles } from './styles';
import { useState } from "react";

const ViewComponent = () =>{
const [name, setName] = useState('');
const [phone, setPhone] = useState('');
const [password, setPass] = useState('');
  return (
    <View style = {styles.container}>
      <TextInput value={name}
      onChangeText={setName}
      placeholder='Nhap ho ten'
      style={styles.tipStyle}
      />
      <TextInput value={phone}
      onChangeText={setPhone}
      placeholder='Nhap so dien thoai'
      keyboardType="phone-pad"
      style={styles.tipStyle}
      />
      <TextInput value={password}
      onChangeText={setPass}
      placeholder='Nhap mat khau'
      secureTextEntry={true}
      style={styles.tipStyle}
      />

      <Text style ={styles.baseText}>
        Em vao doi bang {' '}
        <Text style = {[styles.boldText, colorText('red')]}>vang do </Text>anh vao doi bang{' '}
        <Text style = {[styles.boldText, colorText('yellow')]}>nuoc tra</Text>
      </Text>

      <Text style={styles.baseText}>
        Bang con mua thom{' '}
        <Text style={[styles.boldText,styles.sizeTextBig,styles.italicText]}>
        mui dat{' '}
        </Text>{' '}
        va{' '}
        <Text style={[ styles.italicText, styles.sizeTextSmall]}>
          bang hoa dai moc truoc nha
        </Text>   
      </Text>

      <Text style={[ styles.baseText, styles.italicText, styles.boldText, colorText('gray')]}>
        Em vao doi bang ke hoach anh vao doi bang mong mo
      </Text>

      <Text style={[styles.baseText]}>
      Ly tri em la{' '}
        <Text style={styles.styleText}>
        {' '}
        cong cu{' '}
        </Text>
        con trai tim anh la
        <Text style={styles.styleText}>
        {' '}
        dong co{' '}
        </Text>
      </Text>

      <Text style={[styles.baseText, styles.rightText]}>
        Em vao doi nhieu dong nghiep anh vao doi nhieu than tinh
      </Text>

      <Text style={[ styles.baseText, styles.styleText2]}>
        Anh chi muon chan minh dap dat khong muon dap ai duoi chan minh
      </Text>

      <Text style={[styles.baseText, styles.styleText3]}>
        Em vao doi bang <Text style={colorText('white')}> may trang </Text>
        em vao doi bang <Text style={colorText('yellow')}> nang xanh</Text>
      </Text>
    </View>
  );
};
export default ViewComponent;

const colorText = color =>({
  color,
});