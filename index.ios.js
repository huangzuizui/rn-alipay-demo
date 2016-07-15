/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
import Alipay from 'rn-alipay';

class AlipayDemo extends Component {
    goAlipay () {
        const privateKey = 'MIICeAIBADANBgkqhkiG9w0BAQEFAASCAmIwggJeAgEAAoGBAN0yqPkLXlnhM+2H/57aHsYHaHXazr9pFQun907TMvmbR04wHChVsKVgGUF1hC0FN9hfeYT5v2SXg1WJSg2tSgk7F29SpsF0I36oSLCIszxdu7ClO7c22mxEVuCjmYpJdqb6XweAZzv4Is661jXP4PdrCTHRdVTU5zR9xUByiLSVAgMBAAECgYEAhznORRonHylm9oKaygEsqQGkYdBXbnsOS6busLi6xA+iovEUdbAVIrTCG9t854z2HAgaISoRUKyztJoOtJfI1wJaQU+XL+U3JIh4jmNx/k5UzJijfvfpT7Cv3ueMtqyAGBJrkLvXjiS7O5ylaCGuB0Qz711bWGkRrVoosPM3N6ECQQD8hVQUgnHEVHZYtvFqfcoq2g/onPbSqyjdrRu35a7PvgDAZx69Mr/XggGNTgT3jJn7+2XmiGkHM1fd1Ob/3uAdAkEA4D7aE3ZgXG/PQqlm3VbE/+4MvNl8xhjqOkByBOY2ZFfWKhlRziLEPSSAh16xEJ79WgY9iti+guLRAMravGrs2QJBAOmKWYeaWKNNxiIoF7/4VDgrcpkcSf3uRB44UjFSn8kLnWBUPo6WV+x1FQBdjqRviZ4NFGIP+KqrJnFHzNgJhVUCQFzCAukMDV4PLfeQJSmna8PFz2UKva8fvTutTryyEYu+PauaX5laDjyQbc4RIEMU0Q29CRX3BA8WDYg7YPGRdTkCQQCG+pjU2FB17ZLuKRlKEdtXNV6zQFTmFc1TKhlsDTtCkWs/xwkoCfZKstuV3Uc5J4BNJDkQOGm38pDRPcUDUh2/';
        const data = {
            privateKey,
            partner: '2088302277569230',
            seller: '12312341234',
            outTradeNO: '1231231231231', //订单ID（由商家自行制定）
            subject: '测试商品标题', //商品标题
            body: '测试产品描述', //商品描述
            totalFee: '1', //商品价格
            notifyURL: 'http://www.baidu.com"', //回调URL
            service: 'mobile.securitypay.pay',
            paymentType: '1',
            inputCharset: 'utf-8',
            itBPay: '30m',
            showURL: 'm.alipay.com',
            appSchemeIOS: 'testapp20', //应用注册scheme,在AlixPayDemo-Info.plist定义URL types
        };
        Alipay.pay(data).then((msg) => {
            console.log(msg);
        }, (e) => {
            console.log(e);
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    点击进入支付宝支付
                </Text>
                <Text style={styles.instructions}>
                    具体参数请在页面中配置
                </Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.goAlipay.bind(this)}>
                    <Text style={styles.buttonText}>去支付</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    button: {
        marginTop: 10,
        padding: 10,
        borderColor: '#ff6600',
        borderWidth: 1,
        borderRadius: 5,
    },
    buttonText: {
        color: '#ff6600',
    },
});

AppRegistry.registerComponent('alipayDemo', () => AlipayDemo);
