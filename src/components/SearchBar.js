import React from 'react';

class SearchBar extends React.Component{

    state = { term:''};

    TBsearchChange = (event) => {
                              
          console.log(event.target.value);
          this.setState({term: event.target.value});  

    }

    FRMsearchSubmit = (event) => {
        
        event.preventDefault();

        //console.log('form submitted');

        // call callback from parent
        this.props.FNCsearchVideo(this.state.term);

    } 

    render() {

        return (
                <div className="search-bar ui segment">
                    <form   id="FRMsearch" 
                            onSubmit={this.FRMsearchSubmit}
                            className="ui form">
                        
                        <div className="field">
                            <label>Video Searh</label>
                            <input 
                            id="TBsearch" 
                            type="text" 
                            onChange={this.TBsearchChange}
                            value={this.state.term} />
                        </div>                        
                    </form>
                </div>
        );
    }

}


export default SearchBar;