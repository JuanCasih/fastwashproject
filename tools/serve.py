#!/usr/bin/env python3
"""Static file server for local preview. Avoids relying on os.getcwd() defaults."""
import functools
import http.server
import sys

PROJECT_ROOT = "/Users/juancruzcasih/Desktop/Car Wash/fastwashproject"
PORT = 8766

if __name__ == "__main__":
    if len(sys.argv) > 1:
        PORT = int(sys.argv[1])
    handler = functools.partial(http.server.SimpleHTTPRequestHandler, directory=PROJECT_ROOT)
    with http.server.ThreadingHTTPServer(("", PORT), handler) as httpd:
        print(f"Serving {PROJECT_ROOT} at http://localhost:{PORT}/")
        httpd.serve_forever()
