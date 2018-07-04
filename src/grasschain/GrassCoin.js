import React from 'react';
import Web3 from 'web3';

class GrassCoin extends React.Component{
    componentWillMount() {
        const ABI = [{"constant":true,"inputs":[],"name":"GSCCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"GSCID","type":"uint256"}],"name":"getGSCHistory","outputs":[{"name":"history","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"GSCList","outputs":[{"name":"mainWallet","type":"address"},{"name":"value","type":"uint256"},{"name":"deposit","type":"uint256"},{"name":"Gchain_all","type":"uint256"},{"name":"status","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"GSCID","type":"uint256"}],"name":"verify","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"GSCID","type":"uint256"}],"name":"getGSCRatio","outputs":[{"name":"ratio","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"GSCID","type":"uint256"}],"name":"pay","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"GSCID","type":"uint256"}],"name":"getGSCAddr","outputs":[{"name":"Gchain","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"Gchain","type":"address[]"},{"name":"value","type":"uint256"},{"name":"ratio","type":"uint256[]"}],"name":"createGSC","outputs":[{"name":"GSCID","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"GSCID","type":"uint256"}],"name":"abort","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"GSCID","type":"uint256"}],"name":"getGSCTimestamp","outputs":[{"name":"timestamp","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"anonymous":false,"inputs":[],"name":"aborted","type":"event"},{"anonymous":false,"inputs":[],"name":"purchaseConfirmed","type":"event"},{"anonymous":false,"inputs":[],"name":"paymentDone","type":"event"}];
        const contractAddr = "0xE8720CB8b80ffb4D93BeE736C624dc547603fc49";
        const GABI = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"vaultID","type":"uint256"}],"name":"terminateGRC","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"vaultList","outputs":[{"name":"master","type":"address"},{"name":"value","type":"uint256"},{"name":"total","type":"uint256"},{"name":"timestamp","type":"uint256"},{"name":"status","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_value","type":"uint256"}],"name":"burn","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_value","type":"uint256"}],"name":"depositGRC","outputs":[{"name":"success","type":"bool"},{"name":"vID","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_value","type":"uint256"}],"name":"burnFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"vaultID","type":"uint256"}],"name":"stakeGRC","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"},{"name":"_extraData","type":"bytes"}],"name":"approveAndCall","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"initialSupply","type":"uint256"},{"name":"tokenName","type":"string"},{"name":"tokenSymbol","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Burn","type":"event"}];
        const grcAddr = "0x1179cf51c590794b0897586bc83a8d82ef8a243b";

        var web3 = new Web3(Web3.givenProvider);
        var GrassCoin = new web3.eth.Contract(GABI, grcAddr);
        var GrassChain = new web3.eth.Contract(ABI, contractAddr);
        var GSCID = 2;

        Promise.all([getAddress()]).then(function (address) {
            console.log(address[0]);
            GrassCoin.methods.balanceOf(address[0]).call().then(function (result) {
                console.log(result);
            })
        })

        GrassChain.methods.GSCCount().call().then(function (result) {
            console.log(result);
        });

        Promise.all([getGSCData(GSCID)]).then(function (data){
            console.log("GSC Data Print!");
            console.log(data);
        })

        async function getAddress() {
            let Adr = await web3.eth.getAccounts();
            return Adr[0];
        }
        async function getGSCData(GSCID) {
            let GSCList = await GrassChain.methods.GSCList(GSCID).call();
            let GSCRatio = await GrassChain.methods.getGSCRatio(GSCID).call();
            let GSCTimeStamp = await GrassChain.methods.getGSCTimestamp(GSCID).call();
            let GSCAddr = await GrassChain.methods.getGSCAddr(GSCID).call();
            console.log(GSCList);
            console.log(GSCRatio);
            console.log(GSCTimeStamp);
            console.log(GSCAddr);
            return 0;
        }
        function numberComma(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
    }
    render(){
        return(
            <h1>GRC Wallet!</h1>
        );
    }
}

export default GrassCoin;