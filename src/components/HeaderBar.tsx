import './HeaderBar.css';
import {useState} from 'react';
import {filterType} from './FilterDocket';
import FilterDocket from './FilterDocket';

export default function HeaderBar(filter: {filterState: filterType, setFilterState: React.Dispatch<React.SetStateAction<filterType>>}){
    /* In App.tsx 
    const [filterState, setFilterState] = useState<filterType>("All dockets"); */
    const [isOpen, setIsOpen] = useState<boolean>(false);
    // Open or close the filter menu on clicking the filter icon.
    function toggleFilterMenu(){
        setIsOpen(!isOpen);
    };

    return(
        <div className="header">
            <span className="header">Ben Scicluna's Inbox</span>
            <span className="filterTag">{filter.filterState}</span>
            <span className="filter">
                <img src={require('../images/filter_symbol.png')} alt="filter symbol" onClick={toggleFilterMenu} className="HeaderBar"/>
                <span className="filterButton">Filter</span>
                <span className="filterOptions">{isOpen && <FilterDocket setFilterState={filter.setFilterState}/>}</span>
            </span>
            
        </div>
    );
}