import './FilterDocket.css';

export type filterType = "Filter by projects" | "Due today" | "All dockets";

export default function FilterDocket(filter: {setFilterState: React.Dispatch<React.SetStateAction<filterType>>}){
    /* Converts filterBars to an array of type HTMLElement[] so that it has the "forEach" property,
    and that its items have the "style" property */ 
    var filterBars:HTMLElement[] = Array.from(document.querySelectorAll(".filterOptions")); 

    function handleClick1()
    {
        const filterCriterion:HTMLElement|null = document.querySelector("div.buttons>div:nth-child(1 of .filterOptions)");
        if (filterCriterion !== null){
            filterCriterion.style.backgroundColor = "#4646FF";
            filter.setFilterState("Filter by projects");
        }
        // Reset the background color of other filter options to ensure that only one filter criteria can be selected at one time
        filterBars.forEach((item) => {
            if (item !== filterCriterion){
                item.style.backgroundColor = "#B4B4FF";
            }
        })
    }

    function handleClick2()
    {
        const filterCriterion:HTMLElement|null = document.querySelector("div.buttons>div:nth-child(2 of .filterOptions)");
        if (filterCriterion !== null){
            filterCriterion.style.backgroundColor = "#4646FF";
            filter.setFilterState("Due today");
        }
        // Reset the background color of other filter options.
        filterBars.forEach((item) => {
            if (item !== filterCriterion){
                item.style.backgroundColor = "#B4B4FF";
            }
        })
    }

    function handleClick3()
    {
        const filterCriterion:HTMLElement|null = document.querySelector("div.buttons>div:nth-child(3 of .filterOptions)");
        if (filterCriterion !== null){
            filterCriterion.style.backgroundColor = "#4646FF";
            filter.setFilterState("All dockets");
        }
        // Reset the background color of other filter options.
        filterBars.forEach((item) => {
            if (item !== filterCriterion){
                item.style.backgroundColor = "#B4B4FF";
            }
        })
    }

    // Close the filter menu on clicking the cross button.
    function closeFilterMenu(){
        const closeButton: HTMLElement|null = document.getElementById("filterMenu");
        // Check for null to avoid the error "Object is possibly null"
        if (closeButton !== null){
            // Close the filter menu when clicking the cross button. closeButton.classList.add("hide") doesn't work
            closeButton.style.display = "none"; 
        }
    };

    return(
        <div id="filterMenu" className="menu">
            <div className="title">
                <span className="title">Filter Dockets</span>
                <img src={require('../images/close_button.png')} alt="Close filter menu" onClick={closeFilterMenu} className="FilterDocket"/>
            </div>
            <div className="buttons">
                <div className="filterOptions" onClick={handleClick1}>Filter by projects</div>
                <div className="filterOptions" onClick={handleClick2}>Due today</div>
                <div className="filterOptions" onClick={handleClick3}>All dockets</div>
            </div>
        </div>
    );
}