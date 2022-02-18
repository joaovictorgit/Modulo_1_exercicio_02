import { Component } from "react";
import api from "../service/api";
import './form.css';
// Icons
import {FaUserAlt} from 'react-icons/fa';
import {BiBookAlt} from 'react-icons/bi';
import {BiLinkAlt} from 'react-icons/bi';
import {BsSearch}  from 'react-icons/bs';

export default class Forms extends Component{
    
    constructor(props){
        super(props);
        
        this.state = {
            value : '',
            author: []
        }
        this.enviar = this.enviar.bind(this);
        //this.exibir = this.exibir.bind(this);
    }

    async componentDidMount(value){
        if(value === null){
            
        }
        const response = await api.get(value);
        this.setState({author: response.data.hits});
        
        console.log(response.data);
    }

    enviar(){
        let r = this.state.value;
        this.componentDidMount(r);
    }

    

    render(){
        return(
           <div className="forms">
                <h1>Pesquisar autores</h1>
                <input type="text" onChange={(event) => {
                    this.setState({value:event.target.value})
                }} className="camp_text"></input>
                <button type="button" className="buttonSend" onClick={this.enviar}><BsSearch/></button>
                
                <div>
                    {this.state.author.map(a => (
                        <li className="information">
                            <h4 className="inputs1">{a.objectID}</h4>
                            <h4 className="inputs"><FaUserAlt/> {a.author}</h4> 
                            <h4 className="inputs"><BiBookAlt/> {a.title}</h4>
                            <h4 className="inputs"><BiLinkAlt/> {a.url}</h4>
                        </li>
                    ))}
                </div>
                
            </div>

            
        )
    }
}
