#!/usr/bin/env python3
# Fix HTML entities in compare-aging.astro

# Read file
with open('src/pages/tools/compare-aging.astro', 'r', encoding='utf-8') as f:
    content = f.read()

# The problematic text contains raw < and > which Astro interprets as JSX
# We need to replace with HTML entities < and >
# < is < (4 chars: & l t ;)
# > is > (4 chars: & g t ;)

# Using chr() to construct the HTML entity strings explicitly
lt = chr(0x26) + chr(0x6c) + chr(0x74) + chr(0x3b)   # &
gt = chr(0x26) + chr(0x67) + chr(0x74) + chr(0x3b)   # >

# Build the replacement strings
# Original: 狗狗體型分類：小型犬（<10kg）、中型犬（10-25kg）、大型犬（>25kg）
old_text = '狗狗體型分類：小型犬（<10kg）、中型犬（10-25kg）、大型犬（>25kg）'
new_text = '狗狗體型分類：小型犬（' + lt + '10kg' + gt + '）、中型犬（10-25kg）、大型犬（' + gt + '25kg）'

print(f"Old text: {old_text}")
print(f"New text: {new_text}")

# Verify bytes
idx_old = old_text.find('<')
idx_new = new_text.find(lt[0])  # Find the & in <
print(f"Old < bytes: {[hex(ord(c)) for c in old_text[idx_old:idx_old+4]]}")
print(f"New < bytes: {[hex(ord(c)) for c in new_text[idx_new:idx_new+6]]}")

if old_text in content:
    content = content.replace(old_text, new_text)
    with open('src/pages/tools/compare-aging.astro', 'w', encoding='utf-8') as f:
        f.write(content)
    print("Fixed!")
else:
    print("Pattern not found.")