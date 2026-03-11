import os
from PIL import Image

dirs = [r'D:\Popylabs\popylabs-website\public\portfolio', r'D:\Popylabs\popylabs-website\public\portfolio\WebUI_images']
for d in dirs:
    print(f"\nDirectory: {d}")
    if not os.path.exists(d):
        print("Does not exist.")
        continue
    for f in os.listdir(d):
        if not f.endswith(('.png', '.jpg', '.jpeg')): 
            continue
        p = os.path.join(d, f)
        try:
            with Image.open(p) as img:
                print(f"{f}: {img.size}")
        except Exception as e:
            print(f"{f}: Error {e}")
