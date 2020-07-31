import React, {Component} from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import Actions from '../actions/PatientAction';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  containerTitle: {
    marginTop: '5%',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
  },
  containerForm: {
    width: '94%',
    height: 180,
    alignSelf: 'center',
    backgroundColor: '#8B0000',
    borderRadius: 15,
    margin: '3%',
    padding: '5%',
  },
  containerDetailsItem: {
    flexDirection: 'row',
  },
  detailsText: {
    color: 'white',
    fontSize: 15,
  },
  containerTMB: {
    width: '44%',
    height: 100,
    backgroundColor: '#FFB6C1',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    margin: '3%',
  },
  containerFactActivity: {
    width: '44%',
    height: 100,
    backgroundColor: '#FF8C00',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    margin: '3%',
  },
  titleItems: {
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold'
  },
  titleItemsValue: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold'
  },
  link: {
    alignItems: 'flex-start',
    marginTop: 10,
    marginLeft: '6%',
  },
  textLink: {
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',
  },
});
class Diagnostic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombres: '',
      apellidos: '',
      edad: '',
      peso: '',
      talla: '',
      sexo: '',
      sexoD: '',
      actividad: '',
      actividadD: '',
      tmb: '',
      ge: '',
      detailPatient: '',
      returnS: '<',
    };
  }
  async componentDidMount() {
    await this.props.getRegisterPatients();
    const result = this.props.data;
    this.setState({
      detailPatient: result.patient,
    });
    this.state.detailPatient.map((item, index) => {
      this.setState({
        nombres: item.nombres,
        apellidos: item.apellidos,
        edad: item.edad,
        peso: item.peso,
        talla: item.talla,
        sexo: item.sexo,
        actividad: item.actividad,
      });
    });
    if (this.state.sexo === 'M') {
      this.setState({sexoD: 'Masculino'});
      if (this.state.edad >= 0 && this.state.edad <= 30) {
        this.setState({tmb: 15.3 * this.state.peso + 679});
      } else if (this.state.edad > 30) {
        this.setState({tmb: 13.5 * this.state.peso + 487});
      }
    } else {
      this.setState({sexoD: 'Femenino'});
      if (this.state.edad >= 0 && this.state.edad <= 30) {
        this.setState({tmb: 14.7 * this.state.peso + 396});
      } else if (this.state.edad > 30) {
        this.setState({tmb: 10.5 * this.state.peso + 596});
      }
    }
    if (this.state.actividad === 'a1') {
      this.setState({actividadD: 'Reposo', ge: this.state.tmb * 0.5});
    } else if (this.state.actividad === 'a2') {
      this.setState({actividadD: 'Muy ligera', ge: this.state.tmb * 1});
    } else if (this.state.actividad === 'a3') {
      this.setState({actividadD: 'Ligera', ge: this.state.tmb * 1.5});
    } else if (this.state.actividad === 'a4') {
      this.setState({actividadD: 'Moderada', ge: this.state.tmb * 2});
    } else {
      this.setState({actividadD: 'Pesada', ge: this.state.tmb * 2.5});
    }
  }
  goDashboard = () => {
    this.props.navigation.navigate('Dashboard');
  }
  render() {
    const {
      nombres,
      apellidos,
      edad,
      peso,
      talla,
      sexoD,
      actividadD,
      tmb,
      ge,
      returnS,
    } = this.state;
    //console.warn(fb);
    return (
      <View style={styles.container}>
        <ScrollView>
          <StatusBar barStyle={'default'} />
          <View style={styles.containerTitle}>
            <Text style={styles.title}>Diagnóstico de paciente</Text>
          </View>
          <View style={styles.containerForm}>
            <View style={styles.containerDetailsItem}>
              <Text style={styles.detailsText}>Nomres:</Text>
              <Text style={styles.detailsText}> {nombres}</Text>
            </View>
            <View style={styles.containerDetailsItem}>
              <Text style={styles.detailsText}>Apellidos:</Text>
              <Text style={styles.detailsText}> {apellidos}</Text>
            </View>
            <View style={styles.containerDetailsItem}>
              <Text style={styles.detailsText}>Edad:</Text>
              <Text style={styles.detailsText}> {edad} años</Text>
            </View>
            <View style={styles.containerDetailsItem}>
              <Text style={styles.detailsText}>Peso:</Text>
              <Text style={styles.detailsText}> {peso} kg.</Text>
            </View>
            <View style={styles.containerDetailsItem}>
              <Text style={styles.detailsText}>Talla:</Text>
              <Text style={styles.detailsText}> {talla} cm.</Text>
            </View>
            <View style={styles.containerDetailsItem}>
              <Text style={styles.detailsText}>Sexo:</Text>
              <Text style={styles.detailsText}> {sexoD}</Text>
            </View>
            <View style={styles.containerDetailsItem}>
              <Text style={styles.detailsText}>Actividad:</Text>
              <Text style={styles.detailsText}> {actividadD}</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.containerTMB}>
              <Text style={styles.titleItemsValue}>
                {tmb}
                <Text style={styles.titleItems}> Kcal Ba.</Text>
              </Text>
              <Text style={styles.titleItems}>Gasto en reposo(TMB)</Text>
            </View>
            <View style={styles.containerFactActivity}>
              <Text style={styles.titleItemsValue}>
                {ge}
                <Text style={styles.titleItems}> Kcal d.</Text>
              </Text>
              <Text style={styles.titleItems}>Gasto energético</Text>
            </View>
          </View>
          <View style={{width: '50%'}}>
            <TouchableOpacity onPress={this.goDashboard} style={styles.link}>
              <Text style={styles.textLink}>{returnS} Dashboard</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.patientReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getRegisterPatients: () => dispatch(Actions.getPatients()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Diagnostic);
