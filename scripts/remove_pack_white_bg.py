"""Remove edge-connected white backgrounds from product pack PNGs."""
from __future__ import annotations

import sys
from collections import deque
from pathlib import Path

from PIL import Image


def remove_edge_white(path: Path, tolerance: int = 35) -> None:
    im = Image.open(path).convert('RGBA')
    w, h = im.size
    px = im.load()
    visited: set[tuple[int, int]] = set()

    def is_bg(r: int, g: int, b: int, a: int) -> bool:
        if a < 12:
            return True
        return r >= 255 - tolerance and g >= 255 - tolerance and b >= 255 - tolerance

    q: deque[tuple[int, int]] = deque()
    for x in range(w):
        for y in (0, h - 1):
            if is_bg(*px[x, y]):
                q.append((x, y))
    for y in range(h):
        for x in (0, w - 1):
            if is_bg(*px[x, y]):
                q.append((x, y))

    while q:
        x, y = q.popleft()
        if x < 0 or x >= w or y < 0 or y >= h:
            continue
        if (x, y) in visited:
            continue
        r, g, b, a = px[x, y]
        if not is_bg(r, g, b, a):
            continue
        visited.add((x, y))
        px[x, y] = (r, g, b, 0)
        q.extend(((x + 1, y), (x - 1, y), (x, y + 1), (x, y - 1)))

    im.save(path, 'PNG')
    print(f'Updated {path}')


if __name__ == '__main__':
    for arg in sys.argv[1:]:
        remove_edge_white(Path(arg))
