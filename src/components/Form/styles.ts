import styled from "styled-components"

export const Container = styled.div`
    margin: 142px 304px 79px 304px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const FormContainer = styled.div`
    background: linear-gradient(180deg, #201D1D 0%, rgba(32, 29, 29, 0.2) 100%);
`

export const FormContent = styled.form`
    display: flex;
    flex-direction: row;
`

export const InputLabelContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 3.93rem 4.18rem 4.81rem 4.18rem;

    #doble-input {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    label, input, #doble-input {
        margin-top: 0.875rem;
    }
`	

export const MidiaContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const SocialContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    
`

export const CategoryContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
`



// .left {
//     display: flex;
//     padding: 3.93rem 4.25rem 2rem 4.18rem;
//     flex-direction: column;
//     align-items: flex-start;
//     gap: 0.5rem;
// }

// #dobleInput {
//     display: flex;
//     gap: 2.2rem;
// }

// .right {
//     display: flex;
//     flex-direction: column;
//     align-items: flex-start;
//     padding: 3.93rem 4.25rem 2rem 4.18rem;

//     .social {
//         display: grid;
//         grid-template-columns: 3fr 1fr;

//     }
// }