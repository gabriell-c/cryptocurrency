import React, { useState, useEffect } from 'react'
import * as S from './styled'
import CircularProgress from '@mui/material/CircularProgress';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';

export default function index() {

    const [crypto, setCrypto] = useState([])
    const [loading, setLoading] = useState(true)

    const callApi=()=>{
        setLoading(true)
        fetch('https://api.coinlore.net/api/tickers/')
        .then(response=>response.json())
        .then(datas=>{
            setCrypto(datas.data)
        })
        setLoading(false)
    }    
    
    useEffect(()=>{
        callApi()
    })

  return (
    <S.All>
        <S.Navbar>
            <CurrencyBitcoinIcon sx={{ fontSize: 40}}
            style={{fill: '#EF8E19', borderRadius: '50px',
            width: '60px', height: '60px', background: '#eee', transform: 'rotate(10deg)'}}/>
            <h1>Infocoin</h1>
        </S.Navbar>
        <S.Container>
            <S.Header>
                <S.HeaderInfo1>
                    <S.HeaderItemNum>#</S.HeaderItemNum>
                    <S.HeaderItem>Nome</S.HeaderItem>
                </S.HeaderInfo1>
                <S.HeaderInfo2>
                    <S.HeaderItemPrice>Preço</S.HeaderItemPrice>
                    <S.HeaderItemPorc>1h</S.HeaderItemPorc>
                    <S.HeaderItemPorc>24h</S.HeaderItemPorc>
                    <S.HeaderItemPorc>7d</S.HeaderItemPorc>
                    <S.HeaderItem>Vol. 24h</S.HeaderItem>
                    <S.HeaderItem>Cap. de Mercado</S.HeaderItem>
                </S.HeaderInfo2>
               
            </S.Header>

            <S.Body>
                {loading &&
                    <CircularProgress style={{margin: '0 auto'}}/>
                }
                {crypto.map((item, key)=>(
                    <S.BodyItem key={key}>
                        <S.HeaderInfo1>
                            <S.HeaderItemNum>{item.rank}</S.HeaderItemNum>
                            <S.HeaderItem>{`${item.name}`}<p style={{marginLeft: '2em', color: '#22222275'}}>{`${item.symbol}`}</p></S.HeaderItem>
                        </S.HeaderInfo1>
                        <S.HeaderInfo2>
                            <S.HeaderItemPrice>{`US$ ${parseFloat(item.price_usd).toLocaleString('pt-BR')}`}</S.HeaderItemPrice>
                            <S.HeaderItemPorc style={{color: item.percent_change_1h >= 0 ? 'green' : 'red'}}>{`${item.percent_change_1h}%`}</S.HeaderItemPorc>
                            <S.HeaderItemPorc style={{color: item.percent_change_24h >= 0 ? 'green' : 'red'}}>{`${item.percent_change_24h}%`}</S.HeaderItemPorc>
                            <S.HeaderItemPorc style={{color: item.percent_change_7d >= 0 ? 'green' : 'red'}}>{`${item.percent_change_7d}%`}</S.HeaderItemPorc>
                            <S.HeaderItem>{`US$ ${(item.volume24).toLocaleString('pt-BR')}`}</S.HeaderItem>
                            <S.HeaderItem>{`US$ ${(item.market_cap_usd).toLocaleString('pt-BR')}`}</S.HeaderItem>
                        </S.HeaderInfo2>
                    </S.BodyItem>
                ))}
            </S.Body>
        </S.Container>
    </S.All>
  )
}
