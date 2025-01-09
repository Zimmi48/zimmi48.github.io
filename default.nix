{ pkgs ? import <nixpkgs> {} }:
with pkgs;

# Old reference:
# https://web.archive.org/web/20161117045408/https://stesie.github.io/2016/08/nixos-github-pages-env

# New reference:
# https://woutswinkels.github.io/posts/Run-Jekyll-locally-on-NixOS/#method-2

# Update with the following commands:
# rm Gemfile.lock gemset.nix
# nix-shell -p bundler bundix
# bundle config set path vendor
# bundle config set --local force_ruby_platform true
# bundle cache --no-install
# bundix
# rm -rf vendor .bundle

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
  src = null;

  shellHook = ''
    exec ${jekyll_env}/bin/jekyll serve --watch
  '';
}
