import { test, expect } from '@jest/globals';
import { normalizeURL } from "./crawl.js";


test('normalizes http://blog.boot.dev/path to blog.boot.dev/path', () => {
	expect(normalizeURL('http://blog.boot.dev/path')).toBe('blog.boot.dev/path');
});

test('normalizes http://blog.boot.dev/path/ to blog.boot.dev/path', () => {
	expect(normalizeURL('http://blog.boot.dev/path/')).toBe('blog.boot.dev/path');
});

test('normalizes https://blog.boot.dev/path to blog.boot.dev/path', () => {
	expect(normalizeURL('https://blog.boot.dev/path')).toBe('blog.boot.dev/path');
});

test('normalizes http://blog.boot.dev/path to blog.boot.dev/path', () => {
	expect(normalizeURL('https://blog.boot.dev/path/')).toBe('blog.boot.dev/path');
});

test('normalizes https://BLOG.BOOT.dev/path to blog.boot.dev/path', () => {
    expect(normalizeURL('https://BLOG.BOOT.dev/path')).toBe('blog.boot.dev/path');
});