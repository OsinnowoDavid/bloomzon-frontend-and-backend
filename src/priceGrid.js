import * as React from 'react';
import classes from "../src/price.css"
 export default function Gridprice (){
    return(
        <div>
            <ul className={classes.bass}> 

                <li className={classes.mainlist}>
                    <div className={classes.list}>

                 
                    <h1 >
                        $2539.76
                    </h1>
                    <ul className={classes.smalllist}>
                    <li className={classes.listtext}>
                        Daily Revenu
                    </li>
                    <li className={classes.green}>
                        +27838
                    </li>
                    </ul>
                    </div>

                </li>

                
                <li className={classes.mainlist}>
                    <div className={classes.list}>

                 
                    <h1>
                        $2539.76
                    </h1>
                    <ul className={classes.smalllist}>
                    <li>
                    Daily Revenu
                    </li>
                    <li className={classes.green}>
                        +27838
                    </li>
                    </ul>
                    </div>

                </li>

                
                <li className={classes.mainlist}>
                    <div className={classes.list}>

                 
                    <h1>
                        $2539.76
                    </h1>
                    <ul className={classes.smalllist}>
                    <li>
                    Daily Revenu
                    </li>
                    <li className={classes.green}>
                        +27838
                    </li>
                    </ul>
                    </div>

                </li>

            </ul>
        </div>
    )
 }