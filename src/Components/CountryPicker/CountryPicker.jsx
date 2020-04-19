import React, {useEffect, useState} from 'react';
import styles from './CountryPicker.module.css';
import {NativeSelect, FormControl} from '@material-ui/core';
import {fetchCountries} from '../../Api';
const CountryPicker = ({handleCountryChange}) => {
    const [fetchedCountries, setCountries] = useState([]);
    useEffect(()=>{
        const fetchAPI = async ()=>{
            setCountries(await fetchCountries());
        }
        fetchAPI();
    }, [setCountries]);
    //console.log(fetchedCountries);
    return(
        <FormControl className={styles.formcontrol}>
            <NativeSelect defaultValue="" onChange={(e)=> handleCountryChange(e.target.value)}>
                <option value=""> Global </option>
    {fetchedCountries.map((country, i) => <option key= {i} value={country}>{country}</option>)}

            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;