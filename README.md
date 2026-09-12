# Trust and Equitable Access in Digital Markets

## PS1 Research Proposal

**COMSCI/ECON 206 — Computational Microeconomics**  
**Autumn 2026 Session 1**

This repository contains the research proposal and computational artifacts for my PS1 project:

> **Trust and Equitable Access in Digital Markets: How platform rules, reputation information, and income uncertainty jointly affect trust, speculation, and genuine consumer access to scarce goods.**

## Research Question

How do platform rules, reputation information, and income uncertainty jointly affect trust, speculation, and genuine consumer access to scarce goods?

The project connects three disciplinary perspectives:

- **Economics:** examines how income uncertainty affects consumers' financial capacity to participate in markets and whether platform rules reduce or reinforce unequal access.
- **Computer Science:** develops a simulation framework to compare platform rules under different levels of demand, scarcity, speculation, buyer heterogeneity, and reputation information.
- **Behavioral Science:** studies how reputation information affects trust and willingness to transact, including whether more information can lead to heuristic over-reliance and speculative behavior.

## Repository Structure

    .
    ├── main.tex
    ├── references.bib
    ├── README.md
    ├── sections/
    │   └── proposal.tex
    ├── appendices/
    │   └── supporting.tex
    ├── figures/
    │   ├── ps1_teaser.drawio
    │   └── ps1_teaser.pdf
    └── companion/
        ├── notebooks/
        │   └── PS1_Trust_Equitable_Access_Simulation.ipynb
        ├── requirements.txt
        ├── README.md
        └── outputs/

## Computational Artifact

The main computational artifact is:

`companion/notebooks/PS1_Trust_Equitable_Access_Simulation.ipynb`

The notebook implements a computational simulation of scarce-good markets. It represents heterogeneous buyers and varies platform rules, reputation-information conditions, demand, scarcity, speculative participation, and buyer constraints.

The simulation is designed to examine when platform rules and information signals improve genuine consumer access and when they may unintentionally increase speculative crowding.

## Interactive Behavioral Artifact

The project also includes a Hugging Face interactive game.

The game provides a simplified behavioral test in which a buyer receives a new $100 budget in each of three rounds and makes bidding decisions under three reputation-information conditions:

1. No History
2. Recent History
3. Full History

The three bids are selected before the transaction outcome is revealed, so the buyer cannot change later choices after seeing an earlier result.

The game is intended as an accessible behavioral demonstration rather than a population-level experiment.

## Reproducibility

The computational artifact uses synthetic/model-generated inputs rather than an external human-subject dataset.

The dependencies required to run the notebook are listed in:

`companion/requirements.txt`

### How to Run

1. Open the Google Colab notebook.
2. Install the dependencies listed in `requirements.txt` if necessary.
3. Run the notebook from the first cell to the last cell.
4. The notebook produces the simulation tables, figures, and other outputs used in the PS1 analysis.

The submitted notebook preserves the actual outputs from the final run.

## Evidence Boundary

The simulation is a stylized computational model and uses explicit modeling assumptions and synthetic inputs.

Its results should not be interpreted as population-level evidence or as causal estimates of real-world consumer behavior.

The Hugging Face game is a small behavioral prototype, and its pilot results are not sufficient to establish general behavioral effects.

Future work would require a larger multi-participant behavioral experiment and/or real platform data.

## Connection to the Paper

The paper develops the interdisciplinary argument, while the computational artifact makes the proposed computational mechanism inspectable and reproducible.

The economics component evaluates market participation, allocation, and surplus.

The computer-science component implements the simulation and compares alternative platform mechanisms.

The behavioral-science component motivates how buyers may interpret reputation information and translate it into transaction decisions.

Together, these components study how information design, platform rules, and financial constraints interact to shape genuine access to scarce goods.

## Links

### Final Paper

https://www.overleaf.com/read/ttmqthtyqsdh#a8d8b5

### Google Colab

https://colab.research.google.com/drive/193R57-a-d-1RZOn3iszmP1Ya4X1AoBF2#scrollTo=2-20eTle3qXZ

### Hugging Face Space

https://huggingface.co/spaces/dku-comsci-econ206-2026/Xuantong_Fu_Space

### GitHub Repository

https://github.com/ixs3v3n/PS1-Xuantong

### Submitted Commit

`https://github.com/ixs3v3n/PS1-Xuantong`

The submitted commit identifies the exact repository version associated with the PS1 submission.

## License and Reuse

The code and documentation are provided for academic and educational use with attribution. The simulation should be reused with its stated assumptions and evidence limitations in mind.
