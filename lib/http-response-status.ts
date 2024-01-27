import { NextResponse } from "next/server";

/**
 * View more: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
 */

export function ok(data: object = {}) {
  return NextResponse.json(data);
}

export function created(data = {}) {
  return NextResponse.json(data, { status: 201 });
}

export function badRequest(msg = "400 Bad Request") {
  return NextResponse.json({ error: { msg } }, { status: 400 });
}

export function unauthorized(msg = "401 Unauthorized") {
  return NextResponse.json({ error: { msg } }, { status: 401 });
}

export function forbidden(msg = "403 Forbidden") {
  return NextResponse.json({ error: { msg } }, { status: 403 });
}

export function notFound(msg = "404 Not Found") {
  return NextResponse.json({ error: { msg } }, { status: 404 });
}

export function methodNotAllowed(msg = "405 Method Not Allowed") {
  return NextResponse.json({ error: { msg } }, { status: 405 });
}

export function conflict(msg = "409 Conflict") {
  return NextResponse.json({ error: { msg } }, { status: 409 });
}

export function tooManyRequest(msg = "429 Too Many Request") {
  return NextResponse.json({ error: { msg } }, { status: 429 });
}

export function serverError(msg = "500 Internal Server Error") {
  return NextResponse.json({ error: { msg } }, { status: 500 });
}
