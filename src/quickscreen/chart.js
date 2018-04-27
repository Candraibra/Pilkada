
    import React from 'react';
    import {
      AppRegistry,
      StyleSheet,
      Text,
      View,
      processColor,
    } from 'react-native';
    import {Icon} from "native-base"
    import {StackNavigator, SafeAreaView} from 'react-navigation';
    
    import {PieChart} from 'react-native-charts-wrapper';
    
    class Quick extends React.Component {
      constructor() {
        super();
    
        this.state = {
          legend: {
            enabled: true,
            textSize: 12,
            form: 'CIRCLE',
            position: 'RIGHT_OF_CHART',
            wordWrapEnabled: true
          },
          data: {
            dataSets: [{
              values: [{value: 40, label: 'Jokowi'},
                {value: 21, label: 'Ahok'},
                {value: 15, label: 'SBY'},
                {value: 9, label: 'AHY'},
                {value: 15, label: 'Anis'}],
              label: 'Keterangan',
              labelTextFamily:"Roboto",
              config: {
                colors: [processColor('#C0FF8C'), processColor('#FFF78C'), processColor('#FFD08C'), processColor('#8CEAFF'), processColor('#FF8C9D')],
                valueTextSize: 20,
                valueTextFamily:"Roboto",
                valueTextColor: processColor('#f25757'),
                sliceSpace: 5,
                marginLeft:3,
                selectionShift: 13
              }
            }],
          },
          highlights: [{x:2}],
          description: {
            text: 'Pilkada 2018',
            textSize: 16,
            textWeight:"bold",
            textFamily:"Roboto",
            textColor: processColor('#f25757'),
    
          }
        };
      }
    
      handleSelect(event) {
        let entry = event.nativeEvent
        if (entry == null) {
          this.setState({...this.state, selectedEntry: null})
        } else {
          this.setState({...this.state, selectedEntry: JSON.stringify(entry)})
        }
    
        console.log(event.nativeEvent)
      }
    
      render() {
        return (
          <SafeAreaView style={{flex: 1}}>  
            <View style={styles.container}>
              <PieChart
                style={styles.chart}
                logEnabled={true}
                chartBackgroundColor={processColor('white')}
                chartDescription={this.state.description}
                data={this.state.data}
                legend={this.state.legend}
                highlights={this.state.highlights}
    
                entryLabelColor={processColor('#251e1e')}
                entryLabelTextSize={20}
                drawEntryLabels={true}
    
                rotationEnabled={true}
                rotationAngle={45}
                usePercentValues={false}
                styledCenterText={{text:'Quick Count', color: processColor('red'), size: 20}}
                centerTextRadiusPercent={100}
                holeRadius={40}
                holeColor={processColor('#f0f0f0')}
                transparentCircleRadius={45}
                transparentCircleColor={processColor('#f0f0f088')}
                maxAngle={350}
                onSelect={this.handleSelect.bind(this)}
                onChange={(event) => console.log(event.nativeEvent)}
              />
            </View>
          </SafeAreaView>
        );
      }
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
      },
      chart: {
        flex: 1
      }
    });
    
    export default Quick;
    
