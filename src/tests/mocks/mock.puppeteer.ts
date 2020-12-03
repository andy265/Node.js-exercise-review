import { Browser, Page } from 'puppeteer';

export const stubPage = ({
  setRequestInterception() {
    return Promise.resolve();
  },
  on() {
    console.log('on function');
  },
  waitForSelector() {
    return Promise.resolve();
  },
  setUserAgent() {
    return Promise.resolve();
  },
  evaluate() {
    return Promise.resolve();
  },
  waitForNavigation() {
    return Promise.resolve();
  },
  click() {
    return Promise.resolve();
  },
  goto(url: string) {
    console.log(url);
    return Promise.resolve();
  },
} as unknown) as Page;

export const stubBrowser = ({
  newPage() {
    return Promise.resolve(stubPage);
  },
  close() {
    return Promise.resolve();
  },
} as unknown) as Browser;

export const stubPuppeteer = ({
  launch() {
    return Promise.resolve(stubBrowser);
  },
} as unknown) as any;
