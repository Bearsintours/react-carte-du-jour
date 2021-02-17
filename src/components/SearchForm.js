import { connect } from "react-redux";
import { setTextFilter } from "../actions/filters";
import Form from "react-bootstrap/Form";

export const SearchForm = ({ setTextFilter, filters }) => {
  return (
    <div className="search">
      <form>
        <Form.Group>
          <Form.Control
            className="search-bar"
            size="lg"
            type="text"
            value={filters.text}
            placeholder="Search"
            onChange={(e) => setTextFilter(e.target.value)}
          />
        </Form.Group>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    filters: state.filters,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setTextFilter: (text) => dispatch(setTextFilter(text)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
