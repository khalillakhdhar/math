import React from "react";
class Pgcd extends React.Component
{
// eslint-disable-next-line no-useless-constructor
constructor(props)
{
    super(props);
    this.state={valeur1:1,valeur2:1};

}
diviseur= () =>
{
    let v1=this.state.valeur1;
    let v2=this.state.valeur2;
    while(v1!=v2)
    {
        if(v1>v2)
        {
            v1=v1-v2;
        }
        else
        v2-=v1;

    }
    alert("le PGCD de "+this.state.valeur1+" et "+this.state.valeur2+" = "+v1)
}
    render()
    {
        return(
        
            <><h1>Calculer de PGCD</h1><br />
            <form >
                Valeur1 :<input type="number" min="0" value={this.state.valeur1} onChange={(e)=>this.setState({valeur1 : e.target.value})}/>
                Valeur2 :<input type="number" min="0" value={this.state.valeur2} onChange={(e)=>this.setState({valeur2 : e.target.value})}/>
                <button onClick={this.diviseur} type="button">Verifier</button>
            </form>
            
            </>
    
        )
    }



}
export default Pgcd;