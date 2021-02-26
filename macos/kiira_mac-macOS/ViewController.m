#import "ViewController.h"
#import "AppDelegate.h"

#import <React/RCTRootView.h>

@implementation ViewController

- (void)viewDidLoad {
  [super viewDidLoad];

  RCTBridge *bridge = [((AppDelegate *)[NSApp delegate])bridge];
  RCTRootView *rootView = [[RCTRootView alloc] initWithBridge:bridge moduleName:@"kiira_mac" initialProperties:nil];

  NSView *view = [self view];
  view.frame = CGRectMake(10, 10, 1200, 800);
  
  [view addSubview:rootView];
  [rootView setBackgroundColor:[NSColor windowBackgroundColor]];
  [rootView setFrame:[view bounds]];
  [rootView setAutoresizingMask:(NSViewMinXMargin | NSViewMinXMargin | NSViewMinYMargin | NSViewMaxYMargin | NSViewWidthSizable | NSViewHeightSizable)];
}

@end
