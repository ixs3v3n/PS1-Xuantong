# PS1 Computational Artifact
## Trust and Equitable Access in Digital Markets

This directory contains the computational artifact for my PS1 research proposal,
"Trust and Equitable Access in Digital Markets."

## Research Question

How do platform rules, reputation information, and income uncertainty jointly
affect trust, speculation, and genuine consumer access to scarce goods?

## Focused Computational Question

Holding reputation information and income uncertainty fixed, does the
transferable but non-refundable rule increase speculative crowding and reduce
genuine-consumer access relative to the refundable but non-transferable rule?

## Main test

Baseline conditions:

- Reputation: No History
- Income uncertainty: Low
- 100 buyers per round
- 30 goods per round
- 200 rounds per condition
- Random seed: 42

The three evaluation outcomes are:

- Genuine access rate = genuine winners / genuine buyers
- Speculation rate = speculator winners / all winners
- Transaction rate = all winners / all buyers

Verified baseline outputs:

| Outcome | Refundable + Non-transferable | Transferable + Non-refundable |
|---|---:|---:|
| Genuine access rate | 42.38% | 1.93% |
| Speculation rate | 0.00% | 95.17% |
| Transaction rate | 29.63% | 29.95% |

The near-identical transaction rates make it possible to distinguish a
change in buyer composition from a general decline in participation.

## Notebook

The main computational artifact is:

`notebooks/PS1_Trust_Equitable_Access_Simulation.ipynb`

The notebook implements a heterogeneous-agent simulation of scarce-good markets.
It varies platform rules, reputation information, income uncertainty, and
speculative participation.

## Reproducibility

The notebook is designed to be runnable in Google Colab.

### Dependencies

Python packages used by the notebook are listed in:

`requirements.txt`

### How to run

1. Open the Google Colab notebook.
2. Install the listed dependencies if they are not already available.
3. Run the notebook from the first cell to the last cell.
4. Confirm that 2,400 observations are generated.
5. Confirm that the focused baseline comparison reproduces the values documented above.
6. The notebook generates the simulation outputs and figures shown in the saved notebook.

The computational inputs are synthetic/model-generated rather than an external
human-subject dataset.

## Outputs

Saved outputs are provided in:

`outputs/`

They include the full summary table and the focused baseline comparison used
in the revised PS1.

## Relationship to the Hugging Face Game

The computational simulation and the Hugging Face interactive game address the
same broader research question but serve different purposes.

The Hugging Face game is a small human-facing behavioral prototype in which a
buyer makes bidding decisions under No History, Recent History, and Full History.

The Colab simulation extends the computational analysis to heterogeneous buyers,
platform rules, income uncertainty, and speculative participation.

The game therefore provides an accessible behavioral demonstration, while the
Colab provides a reproducible computational model.

## Evidence Boundary

The simulation uses stylized assumptions and synthetic inputs. Its outputs are
computational results, not evidence of population-level human behavior or
real-world causal effects.

Behavioral and policy conclusions require future testing with human participants
or real platform data.

## Links

Paper:
https://www.overleaf.com/read/ttmqthtyqsdh#a8d8b5

Google Colab:
https://colab.research.google.com/drive/193R57-a-d-1RZOn3iszmP1Ya4X1AoBF2#scrollTo=2-20eTle3qXZ

Hugging Face:
https://huggingface.co/spaces/dku-comsci-econ206-2026/Xuantong_Fu_Space

## Submitted Version

Submitted commit:

`d33b4e3cbe5c23f764ab1f450ee6bf16c872df88`

The submitted commit must identify the exact repository version associated with
the v2 PS1 submission.

## License

Unless otherwise specified by the course or repository owner, this artifact is
provided for academic and educational reuse with attribution.
