import './search-box.css'

const SearchBox = ({ className, placeholder, onChangeHandler}) => (
        <div>
            <input 
                className={className} 
                type='search'
                placeholder={placeholder} 
                onChange={onChangeHandler}
            />
        </div>
)


export default SearchBox