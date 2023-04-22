import { Model, DataTypes} from 'sequelize';
import { sequelize } from '../instances/mysql'

interface UserInstance extends Model{
    id: number,
    name: string,
    age: number
}

export const User = sequelize.define<UserInstance>("User", {
    id:{
        primaryKey: true,
        autoIncrement:true,
        type: DataTypes.INTEGER
    },
    name:{
        type: DataTypes.STRING,
        get(){
            const raw = this.getDataValue('name');
            return `${raw.toLowerCase()}.user`

        }
    },
    /*lastName:{
        type: DataTypes.STRING
    },
    fullName:{
        type: DataTypes.VIRTUAL,
        get(){
            return `${this.getDataValue('name')} ${this.getDataValue('lastname')}`
        }
    },
    firstLetterOfName:{
        type: DataTypes.VIRTUAL,
        get() {
            let name: string = this.getDataValue('name');
            return name.charAt(0);
        }
    },*/
    age:{
        type: DataTypes.INTEGER,
        defaultValue:18,
        set(value: number){
            if(value < 18){
                value = 18
            }
            this.setDataValue('age',value)
        }
    }
},{
    tableName:'users',
    timestamps: false 
});