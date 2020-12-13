import styled from "@emotion/styled"
import { Link as GatsbyLink} from "gatsby"

export const PredictiveButton = styled.button`
  cursor: pointer;
  width: 25%;
  border: none;
  background: #b42d52;
  color: #FFF;
  margin: 1rem;
  margin-left: 0;
  padding: 10px;
  padding-left: 0;
  font-size: 15px;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.5);
  &:hover {
    background: #e31884;
    -webkit-transition: background 0.3s ease-in-out;
    -moz-transition: background 0.3s ease-in-out;
    transition: background-color 0.3s ease-in-out;
  }
`;
export const Form = styled.form`
  width: 50%;
  margin: auto;
`;

export const FieldSet = styled.fieldset`
  border: medium none !important;
  margin: 0 0 10px;
  min-width: 100%;
  padding: 0;
  width: 100%;
`;
export const TextArea = styled.textarea`
  margin-bottom: 2rem;
  padding: 10px;
  height: 70px;
  width: 100%;
  resize: none;
  &:hover {
    -webkit-transition: border-color 0.3s ease-in-out;
    -moz-transition: border-color 0.3s ease-in-out;
    transition: border-color 0.3s ease-in-out;
    border: 1px solid #aaa;
  }
  placeholder {
    color: #888;
  }
`;
export const Input = styled.input`
  width: 100%;
  border: 1px solid #aaa;
  background: #FFF;
  margin: 0 0 5px;
  margin-bottom: 1rem;
  padding: 10px;
  placeholder {
    color: #888;
  }
  &:focus {
    border: 1px solid #cc5b5b;
  }
`;
export const HeaderLink = styled(GatsbyLink)`
  text-decoration: none;
  color: #FFF;
  text-shadow: none;
  font-size: 1.5rem;
  font-weight: 500;
  font-family: sans-serif;
`;
export const PageLayout = styled.div`
    display: flex;
    flex-direction: column;
`;
export const HeaderStyle = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 4.5rem;
    text-transform: uppercase;
    background: darkred;
`;
export const Footer = styled.footer`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 3rem;
    text-transform: uppercase;
    background: #333;
    color: #FFF;
`;
export const Main = styled.main`
    margin: 2%;
    padding: 2%;
    min-height: 80vh;
    margin-top: 0;
`;
export const Text = styled.h2`
  text-align: center;
  font-size: 1.5rem;
  font-weight: 600;
  padding: 0.5rem;
  margin: 0;
`;