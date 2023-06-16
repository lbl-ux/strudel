# Build HTML
import argparse
import chevron
import json
from pathlib import Path
import sys
import time


def find_templates(root):
    for p in root.glob("**/*.mustache"):
        yield p


def run(options=None):
    # Check location
    cwd = Path.cwd()
    if cwd.name != "website":
        print("You must run this script from within the 'website' directory!")
        return -1
    # Setup input paths
    partials_dir = Path("mustache/partials")
    data_file = Path("mustache/data.json")
    # Load data
    with data_file.open("r", encoding="utf-8") as f:
        data = json.load(f)
    data.update(options)  # override with cmdline options
    # Loop over templates
    root = Path("mustache/pages")
    for input_path in find_templates(root):
        # set assets relative to page location
        rel_parts = input_path.relative_to(root).parts
        dots = len(rel_parts) - 1
        data["assets"] = f"{'../' * dots}assets"
        # Set vars for nav
        # clear all
        dme = [k for k in data if k.startswith("at")]
        for k in dme:
            del data[k]
        if dots == 0:
            data["at1"] = {"home": True}
        elif dots > 0:
            for i in range(dots):
                subdir = rel_parts[i]
                data[f"at{i+1}"] = {subdir: True}
            leaf = input_path.stem
            if leaf != "index":
                data[f"at{dots + 1}"] = {leaf: True}
        else:
            pass
        #print(f"Parts: {rel_parts}\nData: {data}")
        # Read template
        with input_path.open("r", encoding="utf-8") as f:
            result = chevron.render(f, data, partials_path=partials_dir)
        # Construct output path
        output_path = Path("html")
        for p in input_path.parts[2:-1]:
            output_path /= p
        output_path.mkdir(parents=True, exist_ok=True)
        output_path /= f"{input_path.stem}.html"
        # Write rendered template to output path
        with output_path.open("w", encoding="utf-8") as f:
            f.write(result)
        print(f"{input_path} -> {output_path}")


def main(args):
    options = {}
    if args.root is not None:
        options["root"] = args.root
    if args.loop:
        print("Press Control-C to stop")
        try:
            while 1:
                time.sleep(3)
                print("-- run --")
                run(options=options)
        except KeyboardInterrupt:
            print("Stopped")

    else:
        run(options=options)


if __name__ == "__main__":
    p = argparse.ArgumentParser()
    p.add_argument("--root", help="Override data.json 'root'")
    p.add_argument("--loop", action="store_true", default=None)
    args = p.parse_args()
    sys.exit(main(args))
