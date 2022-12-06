import React from "react";
class Factoriel extends React.Component
{
// eslint-disable-next-line no-useless-constructor
constructor(props)
{
    super(props);
    this.state={fact:1,result:"Calcule en attente" };
}
facto = () =>
{
let f=1;
let n=this.state.fact;
for(let i=2;i<=n;i++)
{
    f=f*i;
}
this.setState({result:"la factoriel est: "+f});
alert("la factoriel est: "+f);
}
    render()
    {
        return(
        
            <><h1>Calculer de factoriel</h1><br />
            <form >
                Valeur :<input type="number" min="0" value={this.state.fact} onChange={(e)=>this.setState({fact : e.target.value})}/>
                <button onClick={this.facto} type="button">Verifier</button>
            </form>
            {this.state.result}
            </>

    
        )
    }



}
export default Factoriel;