import * as momentStar from 'moment';
import momentDefault from 'moment';
try {
    console.log("momentStar:" + momentStar().toString());
}
catch (e) {
    console.log(e);
}
try {
    console.log("momentDefault:" + momentDefault().toString());
}
catch (e) {
    console.log(e);
}
