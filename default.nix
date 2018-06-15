{ pkgs ? import <nixpkgs> {} }:

with pkgs;

# Reference: https://stesie.github.io/2016/08/nixos-github-pages-env

let jekyll_env = bundlerEnv rec {
    name = "jekyll_env";
    inherit ruby;
    gemfile = ./Gemfile;
    lockfile = ./Gemfile.lock;
    gemset = ./gemset.nix;
  };
in
stdenv.mkDerivation rec {
  name = "jekyll_env";
  buildInputs = [ jekyll_env ];

  shellHook = ''
    exec ${jekyll_env}/bin/jekyll serve --watch
  '';
}
