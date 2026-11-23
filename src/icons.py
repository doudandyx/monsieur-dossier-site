"""Dessine les icônes du site à partir du symbole de la marque (le même que dans la barre du haut).

    python3 src/icons.py        (demande Pillow : pip install pillow)

Écrit favicon.ico, apple-touch-icon.png et icon-512.png à la racine. favicon.svg est écrit à la main.
À relancer si le symbole change, en reportant ses formes ci-dessous.
"""
from pathlib import Path
from PIL import Image, ImageDraw

ROOT = Path(__file__).resolve().parent.parent
BLUE, WHITE, LINE, MASK = "#2d5bd7", "#ffffff", "#cdd4e4", "#1b1e24"
BIG = 2048            # dessiné en grand, puis réduit : les bords sont lissés
K = BIG / 64          # le symbole est défini sur une grille de 64


def symbol(full_bleed):
    im = Image.new("RGBA", (BIG, BIG), (0, 0, 0, 0))
    d = ImageDraw.Draw(im)
    box = lambda x, y, w, h: [x * K, y * K, (x + w) * K, (y + h) * K]
    if full_bleed:        # iOS arrondit lui-même les coins
        d.rectangle([0, 0, BIG, BIG], fill=BLUE)
    else:
        d.rounded_rectangle(box(2, 2, 60, 60), radius=14 * K, fill=BLUE)
    d.rounded_rectangle(box(18, 12, 28, 40), radius=3 * K, fill=WHITE)          # la feuille
    d.rounded_rectangle(box(22, 19, 20, 3), radius=1.5 * K, fill=LINE)
    d.rounded_rectangle(box(22, 26, 20, 5), radius=1 * K, fill=MASK)            # la bande masquée
    d.rounded_rectangle(box(22, 35, 14, 3), radius=1.5 * K, fill=LINE)
    pt = lambda x, y: (x * K, y * K)                                           # le nœud papillon
    d.polygon([pt(32, 45), pt(24.5, 40.5), pt(24.5, 49.5)], fill=MASK)
    d.polygon([pt(32, 45), pt(39.5, 40.5), pt(39.5, 49.5)], fill=MASK)
    d.ellipse([(32 - 2.2) * K, (45 - 2.2) * K, (32 + 2.2) * K, (45 + 2.2) * K], fill=MASK)
    return im


rounded = symbol(False)
rounded.resize((512, 512), Image.LANCZOS).save(ROOT / "icon-512.png", optimize=True)
rounded.resize((256, 256), Image.LANCZOS).save(ROOT / "favicon.ico", sizes=[(16, 16), (32, 32), (48, 48)])
symbol(True).resize((180, 180), Image.LANCZOS).convert("RGB").save(ROOT / "apple-touch-icon.png", optimize=True)
print("favicon.ico, apple-touch-icon.png, icon-512.png")
