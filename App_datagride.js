import React from 'react';
import DataTable, {COL_TYPES} from 'react-native-datatable-component';
    
const SomeCom = () => {

     //You can pass COL_TYPES.CHECK_BOX Column's value in true/false, by default it will be false means checkBox will be uncheck!
     
     const data = [
           { name: 'Chicken Biryani',age: 21, select: false }, //If user select this row then this whole object will return to you with select true in this case
           { name: 'Chiken koofta', age: 21,select: true },
           { name: 'Chicken sharwma', age: 21,select: false },
           { name: 'Muhammad Rafeh', age: 21, gender: 'male' },
                { name: 'Muhammad Akif', age: 22, gender: 'male' },
                { name: 'Muhammad Umar', age: 21, gender: 'male' },
                { name: 'Amna Shakeel', age: 22, gender: 'female' },
                { name: 'Muhammad Ammar', age: 20, gender: 'male' },
                { name: 'Muhammad Moiz', age: 13, gender: 'male' }
     ]
     
     const nameOfCols = ['name','age', 'select'];
     
     return(
          <DataTable
               onRowSelect={(row) => {console.log('ROW => ',row)}}
               data={data}
               colNames={nameOfCols}
               colSettings={[{name: 'select', type: COL_TYPES.CHECK_BOX}]}
          />
     )
}

export default SomeCom;