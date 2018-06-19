class App extends React.Component {
   render() {
      return (
         <div>
            <Left/>
            <Right/>
         </div>
      );
   }
}

class Left extends React.Component {
   render() {
      return (
         <div className="container left">			
            <button className="btn btn-right">CREATE</button>
            <br/>
            <br/>	
            <div className="active mainMenu">
                <a href="#doneSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle mainMenuItem">Done</a>
                <ul className="collapse list-unstyled" id="doneSubmenu">
                    <li className="homeSubmenuItem">
                    	<a>	                    	
                    	<div className="row">
                    		<div className="col-sm-10 col-md-10 col-lg-10">
                    			<p>Card title. Card title. Card title. Card title. Card title. Card title. Card title. </p>
                    		</div>
                    		<div className="col-sm-2 col-md-2 col-lg-2">
                    			<button className="btn btn-round">3</button>
                    		</div>
                    	</div>	                        
                    </a>
                    </li>
                    <li className="homeSubmenuItem">
                        <div className="row">
                    		<div className="col-sm-10 col-md-10 col-lg-10">
                    			<p>Card title</p>
                    		</div>
                    		<div className="col-sm-2 col-md-2 col-lg-2">
                    			<button className="btn btn-round">3</button>
                    		</div>
                    	</div>
                    </li>
                    <li className="homeSubmenuItem">
                        <div className="row">
                    		<div className="col-sm-10 col-md-10 col-lg-10">
                    			<p>Card title</p>
                    		</div>
                    		<div className="col-sm-2 col-md-2 col-lg-2">
                    			<button className="btn btn-round">3</button>
                    		</div>
                    	</div>
                    </li>
                    <li className="homeSubmenuItem">
                    	<div className="row">
                    		<div className="col-sm-10 col-md-10 col-lg-10">
                    			<p>Card title</p>
                    		</div>
                    		<div className="col-sm-2 col-md-2 col-lg-2">
                    			<button className="btn btn-round">3</button>
                    		</div>
                    	</div>	                        
                    </li>
                    <li className="homeSubmenuItem">
                        <div className="row">
                    		<div className="col-sm-10 col-md-10 col-lg-10">
                    			<p>Card title</p>
                    		</div>
                    		<div className="col-sm-2 col-md-2 col-lg-2">
                    			<button className="btn btn-round">3</button>
                    		</div>
                    	</div>
                    </li>
                    <li className="homeSubmenuItem">
                        <div className="row">
                    		<div className="col-sm-10 col-md-10 col-lg-10">
                    			<p>Card title</p>
                    		</div>
                    		<div className="col-sm-2 col-md-2 col-lg-2">
                    			<button className="btn btn-round">3</button>
                    		</div>
                    	</div>
                    </li>
                </ul>                
            </div>            
            <div className="active mainMenu">
                <a href="#inProgressSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle mainMenuItem">In Progress</a>
                <ul className="collapse list-unstyled" id="inProgressSubmenu">
                    <li className="homeSubmenuItem">
                        <div className="row">
                    		<div className="col-sm-8 col-md-8 col-lg-8">
                    			<p>Card title</p>
                    		</div>
                    		<div className="col-sm-4 col-md-4 col-lg-4">
                    			<button className="btn">3</button>
                    		</div>
                    	</div>
                    </li>
                    <li className="homeSubmenuItem">
                        <div className="row">
                    		<div className="col-sm-8 col-md-8 col-lg-8">
                    			<p>Card title</p>
                    		</div>
                    		<div className="col-sm-4 col-md-4 col-lg-4">
                    			<button className="btn">3</button>
                    		</div>
                    	</div>
                    </li>
                    <li className="homeSubmenuItem">
                        <div className="row">
                    		<div className="col-sm-8 col-md-8 col-lg-8">
                    			<p>Card title</p>
                    		</div>
                    		<div className="col-sm-4 col-md-4 col-lg-4">
                    			<button className="btn">3</button>
                    		</div>
                    	</div>
                    </li>
                </ul>                
            </div>
            <div className="active mainMenu">
                <a href="#todoSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle mainMenuItem">Done</a>
                <ul className="collapse list-unstyled" id="todoSubmenu">
                    <li className="homeSubmenuItem">
                        <div className="row">
                    		<div className="col-sm-8 col-md-8 col-lg-8">
                    			<p>Card title</p>
                    		</div>
                    		<div className="col-sm-4 col-md-4 col-lg-4">
                    			<button className="btn">3</button>
                    		</div>
                    	</div>
                    </li>
                    <li className="homeSubmenuItem">
                        <div className="row">
                    		<div className="col-sm-8 col-md-8 col-lg-8">
                    			<p>Card title</p>
                    		</div>
                    		<div className="col-sm-4 col-md-4 col-lg-4">
                    			<button className="btn">3</button>
                    		</div>
                    	</div>
                    </li>
                    <li className="homeSubmenuItem">
                        <div className="row">
                    		<div className="col-sm-8 col-md-8 col-lg-8">
                    			<p>Card title</p>
                    		</div>
                    		<div className="col-sm-4 col-md-4 col-lg-4">
                    			<button className="btn">3</button>
                    		</div>
                    	</div>
                    </li>
                </ul>                
            </div>	        
		</div>
      );
   }
}

class Right extends React.Component {
   render() {
      return (
         <div className ="right">			
			<div className="container">
				<div className="row">
					<div className="col-sm-12 col-md-12 col-lg-12">
						<button className="btn btn-right">DELETE</button>
					</div>
				</div>
				<br/>
				<div className="row">
					<div className="col-sm-8 col-md-8 col-lg-8">
						<label> Name: </label>
						<br/>
						<input className="input-title" type="text" placeholder="Card name"></input>
					</div>
					<div className="col-sm-4 col-md-4 col-lg-4">
						<label> Status: </label>
						<br/>
						<div className="dropdown">
							<button className="input-title dropdown-toggle" type="button" data-toggle="dropdown">Todo
							<span className="caret"></span></button>
							<ul className="input-title dropdown-menu">
								<li><a href="#">Done</a></li>
								<li><a href="#">In Progress</a></li>
								<li><a href="#">Todo</a></li>
							</ul>
						</div>
					</div>					
				</div>
				<br/>
				<div className="row">
					<div className="col-sm-12 col-md-12 col-lg-12">
						<label> Description: </label>
						<br/>
						<textarea className="input-title"  placeholder="Enter the description here"></textarea>
					</div>
				</div>
				<br/>
				<div className="row">
					<div className="col-sm-12 col-md-12 col-lg-12">
						<label> Task List: </label>
						<button className="btn btn-right">+</button>						
					</div>
				</div>
				<div className="row">
					<div className="col-sm-1 col-md-1 col-lg-1">						
						<input className="btn-right" type="checkbox"></input>
					</div>
					<div className="col-sm-9 col-md-9 col-lg-9">						
						<input className="input-title" type="text" placeholder="Task details"></input>
					</div>
					<div className="col-sm-2 col-md-2 col-lg-2">						
						<button className="btn btn-round">X</button>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-1 col-md-1 col-lg-1">						
						<input className="btn-right" type="checkbox"></input>
					</div>
					<div className="col-sm-9 col-md-9 col-lg-9">						
						<input className="input-title" type="text" placeholder="Task details"></input>
					</div>
					<div className="col-sm-2 col-md-2 col-lg-2">						
						<button className="btn btn-round">X</button>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-1 col-md-1 col-lg-1">						
						<input className="btn-right" type="checkbox"></input>
					</div>
					<div className="col-sm-9 col-md-9 col-lg-9">						
						<input className="input-title" type="text" placeholder="Task details"></input>
					</div>
					<div className="col-sm-2 col-md-2 col-lg-2">						
						<button className="btn btn-round">X</button>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-1 col-md-1 col-lg-1">						
						<input className="btn-right" type="checkbox"></input>
					</div>
					<div className="col-sm-9 col-md-9 col-lg-9">						
						<input className="input-title" type="text" placeholder="Task details"></input>
					</div>
					<div className="col-sm-2 col-md-2 col-lg-2">						
						<button className="btn btn-round">X</button>
					</div>
				</div>
				<br/>	
			</div>			
		</div>		

      );
   }
}
export default App;