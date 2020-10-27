/* eslint-disable import/prefer-default-export */
import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '30s', target: 200 },
    { duration: '30s', target: 400 },
    { duration: '30s', target: 600 },
    { duration: '30s', target: 800 },
    { duration: '30s', target: 1000 },
    { duration: '3m', target: 1000 },
    // { duration: '1m', target: 500 },
    { duration: '1m', target: 0 },
  ],
};

let randNum = () => Math.floor(Math.random() * 10000000) + 1;

export default function () {
  const res = http.get(`http://localhost:8004/api/seller/${randNum()}`);
  check(res, { 'status was 200 for getseller': (r) => r.status === 200 });
  sleep(1);
  const res2 = http.get(`http://localhost:8004/api/store/${randNum()}`);
  check(res2, { 'status was 200 for getstore': (r) => r.status === 200 });
  sleep(1);
};
