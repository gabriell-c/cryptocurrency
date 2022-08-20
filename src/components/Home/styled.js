import styled from 'styled-components'

export const All = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    background: #eee;
`

export const Container = styled.div`
    width: 1300px;
    margin: 2em 0;
    padding: 1em;
    box-shadow: 2px 2px 3px #11111150;
    background: #fff;
    border-radius: 5px;
    border-bottom: solid 2px #22222275;
`

export const Header = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1em;
`

export const HeaderInfo1 = styled.div`
    display: flex;
    align-items: center;
`

export const HeaderInfo2 = styled.div`
    display: flex;
    align-items: center;
`
export const HeaderItemNum = styled.div`
    width: 40px;
    display: flex;
    align-items: center;
    font-weight: 600;
    font-size: 17px;
`

export const HeaderItem = styled.div`
    width: 250px;
    display: flex;
    font-weight: 600;
    align-items: center;
    font-size: 17px;
`

export const HeaderItemPorc = styled.div`
    width: 80px;
    display: flex;
    font-weight: 600;
    font-size: 17px;
`

export const HeaderItemPrice = styled.div`
    width: 140px;
    display: flex;
    font-weight: 600;
    font-size: 17px;
`

export const Body = styled.div`
    display: block;
`

export const BodyItem = styled.div`
    display: flex;
    border-bottom: solid 1.5px #11111130;
    padding: 1.5em 0;
    width: 100%;
    align-items: center;
    justify-content: space-between;
`
export const Navbar = styled.nav`
    display: flex;
    width: 100%;
    height: 80px;
    align-items: center;
    justify-content: center;
    background: #EF8E19;
    font-size: 30px;

    h1{
        color: #eee;
        margin-left: .4em;
    }
`