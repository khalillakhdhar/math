import React from "react";
class Parite extends React.Component
{
// eslint-disable-next-line no-useless-constructor
constructor(props)
{
    super(props);
    this.state={valeur1:0};
}
verification()
{
    // eslint-disable-next-line no-lone-blocks
    {
        let val=this.state.valeur1;
    if(val % 2 ===0)
    alert("paire");
    else
    alert("impaire");
    
    }
}
 verif= () => 
{
    let val=this.state.valeur1;
if(val % 2 ===0)
alert("paire");
else
alert("impaire");

}
    render()
    {
        return(
        
            <><h1>Calculer de parité</h1><br />
            <form >
                Valeur :<input type="number" min="0" value={this.state.valeur1} onChange={(e)=>this.setState({valeur1 : e.target.value})}/>
                <button onClick={this.verif} type="button">Verifier</button>
            </form>
            
            </>

    
        )
    }



}
export default Parite;