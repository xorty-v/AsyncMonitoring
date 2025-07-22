import http from 'k6/http';
import {sleep} from 'k6';

export let options = {
    scenarios: {
        sync_test: {
            executor: 'ramping-vus',
            exec: 'syncTest',
            startVUs: 50,
            stages: [
                { duration: '30s', target: 50 },
                { duration: '1m', target: 150 },
                { duration: '2m', target: 300 },
                { duration: '2m', target: 500 },
                { duration: '1m', target: 0 },
            ]
        },
        async_test: {
            executor: 'ramping-vus',
            exec: 'asyncTest',
            startVUs: 50,
            stages: [
                { duration: '30s', target: 50 },
                { duration: '1m', target: 150 },
                { duration: '2m', target: 300 },
                { duration: '2m', target: 500 },
                { duration: '1m', target: 0 },
            ]
        },
    }
};

export function syncTest() {
    let res = http.get('http://sync-api:8080/sync-work', {
        tags: {app: 'sync'},
    });
    sleep(1);
}

export function asyncTest() {
    let res = http.get('http://async-api:8080/async-work', {
        tags: {app: 'async'},
    });
    sleep(1);
}