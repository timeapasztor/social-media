import {createBrowserHistory} from "history";

const AppHistory = createBrowserHistory({
    basename: "",
    forceRefresh: false,
    keyLength: 6
});

export default AppHistory;
